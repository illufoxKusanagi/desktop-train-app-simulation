Panduan Definitif: Membangun Aplikasi Desktop Qt + Next.js di VS Code

Dokumen ini adalah panduan step-by-step yang komprehensif untuk merancang, mengembangkan, membangun, dan mendistribusikan aplikasi desktop modern lintas platform. Arsitektur ini menggunakan Qt/C++ sebagai backend yang kuat dan Next.js/React sebagai frontend yang dinamis, dengan seluruh alur kerja terpusat di Visual Studio Code.

Bab 1: Prasyarat & Pengaturan Lingkungan

Ini adalah fondasi. Jangan lewatkan satu langkah pun di sini.

1.1. Perangkat Inti

Node.js: Instal versi LTS dari nodejs.org.

Qt Framework: Unduh dan instal menggunakan Official Qt Online Installer.

Saat instalasi, di "Select Components", wajib pilih:

Versi Qt terbaru (misal: Qt 6.7.2).

Di bawahnya, centang compiler untuk OS Anda (Desktop gcc, MSVC 2019, atau macOS).

Di "Additional Libraries", centang Qt WebEngine.

Di "Developer and Designer Tools", centang CMake.

Compiler C++:

Windows: Instal Visual Studio dengan paket "Desktop development with C++".

Linux: sudo apt update && sudo apt install build-essential.

macOS: xcode-select --install.

Git: Instal dari git-scm.com.

1.2. Konfigurasi Visual Studio Code

Instal Visual Studio Code dari situs resminya.

Buka VS Code, masuk ke tab Extensions (Ctrl+Shift+X), dan instal:

C/C++ Extension Pack (diterbitkan oleh Microsoft).

CMake Tools (diterbitkan oleh Microsoft).

Bab 2: Inisialisasi Proyek (Struktur Monorepo)

Kita akan membuat satu folder induk yang berisi semua kode.

Buat Struktur Folder Utama: Buka terminal Anda.

mkdir train-app
cd train-app
mkdir backend frontend


Inisialisasi Backend Qt/CMake:

Di dalam folder backend, buat file CMakeLists.txt minimal. Ini akan menjadi fondasi proyek C++ Anda.

# file: train-app/backend/CMakeLists.txt
cmake_minimum_required(VERSION 3.16)
project(TrainAppBackend VERSION 1.0 LANGUAGES CXX)

set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

find_package(Qt6 COMPONENTS Widgets WebEngineWidgets REQUIRED)

add_executable(TrainApp
    src/main.cpp
    src/mainwindow.cpp
    # ... file C++ lainnya akan ditambahkan di sini
)

target_link_libraries(TrainApp PRIVATE
    Qt6::Widgets
    Qt6::WebEngineWidgets
)


Buat folder src di dalam backend dan tambahkan file main.cpp sederhana untuk memulai.

Inisialisasi Frontend Next.js:

# Jalankan dari folder root train-app
npx create-next-app@latest frontend


Pilih opsi sesuai preferensi Anda (TypeScript, Tailwind CSS, dll).

Bab 3: Otomatisasi & Alur Kerja di VS Code

Ini adalah inti dari alur kerja "tanpa Qt Creator".

3.1. Skrip Build Utama (build.sh)

Buat file build.sh di folder root (train-app). Skrip ini akan menjadi pusat komando Anda.

#!/bin/bash
# Skrip Komando Utama untuk Proyek Hybrid Qt/Next.js

set -e # Hentikan skrip jika ada error

# --- Variabel & Fungsi Bantuan ---
GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'
log_info() { echo -e "${GREEN}[INFO]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)
FRONTEND_DIR="$SCRIPT_DIR/frontend"
BACKEND_DIR="$SCRIPT_DIR/backend"
BUILD_DIR="$BACKEND_DIR/build"
WEB_ASSET_DIR="$BACKEND_DIR/src/web-ui" # Nama folder untuk aset web

show_help() {
    echo "Usage: ./build.sh [command]"
    echo "Commands:"
    echo "  dev      Menyiapkan backend untuk mode development (Debug)."
    echo "  prod     Membangun seluruh aplikasi untuk produksi (Release)."
    echo "  package  Membuat installer (menjalankan 'prod' terlebih dahulu)."
    echo "  clean    Membersihkan semua artefak build dan dependensi."
}

# --- Logika Perintah ---
case "$1" in
    dev)
        log_info "Mengkonfigurasi backend Qt untuk DEVELOPMENT..."
        mkdir -p "$BUILD_DIR"
        cd "$BUILD_DIR"
        cmake -DCMAKE_BUILD_TYPE=Debug -DCMAKE_PREFIX_PATH=/path/to/your/Qt/6.x.x/gcc_64 ..
        log_info "Konfigurasi selesai. Jalankan 'npm run dev' di frontend dan launch debugger di VS Code."
        ;;
    prod)
        log_info "Memulai build PRODUKSI..."
        
        log_info "Langkah 1: Membangun frontend Next.js..."
        cd "$FRONTEND_DIR"
        # Pastikan next.config.js memiliki 'output: "export"'
        npm install
        npm run build
        
        log_info "Langkah 2: Menyalin aset frontend ke backend..."
        rm -rf "$WEB_ASSET_DIR"
        mkdir -p "$WEB_ASSET_DIR"
        cp -R "$FRONTEND_DIR/out/." "$WEB_ASSET_DIR/"
        
        log_info "Langkah 3: Mengkonfigurasi backend Qt untuk PRODUKSI..."
        mkdir -p "$BUILD_DIR"
        cd "$BUILD_DIR"
        # Ganti path Qt sesuai dengan instalasi Anda
        cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_PREFIX_PATH=/path/to/your/Qt/6.x.x/gcc_64 ..
        
        log_info "Langkah 4: Membangun backend Qt (Release)..."
        cmake --build . --config Release
        
        log_info "Build produksi selesai! Executable ada di '$BUILD_DIR'."
        ;;
    package)
        log_info "Membuat paket installer..."
        "$0" prod
        log_info "Menjalankan CPack..."
        cd "$BUILD_DIR"
        cpack
        log_info "Paket installer berhasil dibuat!"
        ;;
    clean)
        log_warn "Membersihkan proyek..."
        rm -rf "$BUILD_DIR"
        rm -rf "$FRONTEND_DIR/node_modules" "$FRONTEND_DIR/.next" "$FRONTEND_DIR/out"
        rm -rf "$WEB_ASSET_DIR"
        log_info "Pembersihan selesai."
        ;;
    *)
        show_help
        ;;
esac
exit 0


PENTING:

Jadikan skrip ini executable: chmod +x build.sh.

Ganti /path/to/your/Qt/6.x.x/gcc_64 di dalam skrip dengan path absolut ke instalasi Qt Anda. Ini sangat penting agar CMake bisa menemukan Qt.

3.2. Konfigurasi Workspace VS Code

Buka folder train-app di VS Code.

Pilih File > Save Workspace As... dan simpan sebagai train-app.code-workspace.

Buat folder .vscode di dalam train-app. Di dalamnya, buat file settings.json untuk memberitahu CMake Tools di mana Qt berada.

// file: train-app/.vscode/settings.json
{
    "cmake.configureArgs": [
        "-DCMAKE_PREFIX_PATH=/path/to/your/Qt/6.x.x/gcc_64"
    ]
}


Lagi, ganti path Qt di sini. Sekarang, VS Code akan secara otomatis mendeteksi proyek CMake Anda. Anda akan melihat tombol-tombol Build dan Debug muncul di status bar bawah.

Bab 4: Alur Kerja Sehari-hari

Mode Pengembangan (Hot Reload)

Terminal 1: Jalankan server Next.js.

cd frontend
npm run dev


Terminal 2: Konfigurasi backend (hanya perlu sekali).

./build.sh dev


Di VS Code:

Buka file C++ (misal: backend/src/main.cpp).

Gunakan Command Palette (Ctrl+Shift+P) dan pilih CMake: Select a Kit. Pilih compiler Anda (misal: GCC).

Tekan F5 untuk memulai sesi debugging. Aplikasi Qt akan muncul dan memuat UI dari localhost:3000.

Mode Produksi (Build Final)

Cukup jalankan satu perintah di terminal dari root train-app:

./build.sh prod


Bab 5: Packaging & Distribusi

Tambahkan Konfigurasi CPack: Di akhir file backend/CMakeLists.txt Anda, tambahkan kode ini untuk mengkonfigurasi CPack dan qt_deploy_runtime_dependencies yang akan menyertakan semua DLL/shared library Qt.

# --- Konfigurasi Deployment ---
include(InstallRequiredSystemLibraries)
set(CPACK_PACKAGE_NAME "${CMAKE_PROJECT_NAME}")
set(CPACK_PACKAGE_VERSION "1.0.0")
# ... (konfigurasi CPack lainnya seperti di panduan sebelumnya) ...

# Sertakan CPack
include(CPack)

# Perintah WAJIB untuk menyertakan dependensi Qt
install(TARGETS ${CMAKE_PROJECT_NAME}
    RUNTIME DESTINATION bin
)
include(Qt6DeploymentSupport)
qt_deploy_runtime_dependencies(
    TARGETS ${CMAKE_PROJECT_NAME}
)


Buat Installer: Jalankan perintah ini dari root train-app:

./build.sh package
