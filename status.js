// ===================================
// DEADLINE PENDAFTARAN (WIB / UTC+7)
// ===================================
// UBAH TANGGAL SESUAI EVENT ASLI
// Contoh: 18 Februari 2026 jam 23:59 WIB
const deadline = new Date("2026-02-18T23:59:00+07:00");

// ===================================
// ELEMENT
// ===================================
const badge = document.getElementById("statusBadge");
const waBtn = document.getElementById("waBtn");
const countdownEl = document.getElementById("countdown");

// ===================================
// HELPER
// ===================================
function pad(n) {
  return String(n).padStart(2, "0");
}

// ===================================
// UPDATE STATUS + COUNTDOWN
// ===================================
function updateStatus() {
  const now = new Date();
  const diff = deadline - now;
  const isOpen = diff > 0;

  // ===== STATUS BADGE =====
  if (badge) {
    badge.classList.remove("open", "closed");
    if (isOpen) {
      badge.textContent = "Pendaftaran Dibuka";
      badge.classList.add("open");
    } else {
      badge.textContent = "Pendaftaran Ditutup";
      badge.classList.add("closed");
    }
  }

  // ===== TOMBOL WHATSAPP =====
  if (waBtn) {
    if (!isOpen) {
      waBtn.textContent = "Pendaftaran Ditutup";
      waBtn.classList.add("disabled");
      waBtn.removeAttribute("href");
    }
  }

  // ===== COUNTDOWN =====
  if (countdownEl) {
    if (!isOpen) {
      countdownEl.innerHTML = "⛔ Pendaftaran sudah ditutup.";
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    countdownEl.innerHTML =
      `⏳ Pendaftaran ditutup dalam: 
      <strong>${days}</strong> hari 
      <strong>${pad(hours)}</strong>:<strong>${pad(minutes)}</strong>:<strong>${pad(seconds)}</strong>`;
  }
}

// ===================================
// JALANKAN
// ===================================
updateStatus();              // jalan langsung
setInterval(updateStatus, 1000); // update tiap detik