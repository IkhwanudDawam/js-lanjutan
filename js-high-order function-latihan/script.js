// Ambil semua element video
const liAll = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya "JAVASCRIPT LANJUTAN"
const liJaLan = liAll.filter(e => e.textContent.includes('JAVASCRIPT LANJUTAN'))

    // Ambil durasi masing" video
    .map(item => item.dataset.duration)

    // Ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        //split
        const part = waktu.split(':').map(part => parseFloat(part))
        return (part[0] * 60) + part[1]
    })

    // Jumahkan semua detik
    .reduce((total, detik) => total + detik);

// Ubah formatnya jadi jam menit detik
const jam = Math.floor(liJaLan / 3600);
const menit = Math.floor((liJaLan - jam * 3600) / 60);
const detik = (liJaLan - jam * 3600) - menit * 60;

// Simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
const pVideo = document.querySelector('.jumlah-video');

pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
pVideo.textContent = `${liAll.filter(e => e.textContent.includes('JAVASCRIPT LANJUTAN')).length} Video`;