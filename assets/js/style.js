// التحكم بالنقاط والشرائح (السلايدر اليدوي)
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[idx]?.classList.add('active');
    dots[idx].classList.add('active');
  });
});

// أزرار التنقل بين الكروت
const cards = document.querySelectorAll('.category-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateActiveCard(index) {
  cards.forEach(card => card.classList.remove('active'));
  cards[index].classList.add('active');
  cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateActiveCard(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateActiveCard(currentIndex);
});

cards.forEach((card, idx) => {
  card.addEventListener('click', () => {
    currentIndex = idx;
    updateActiveCard(currentIndex);
  });
});

// العداد التنازلي (Countdown Timer)
const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 3);

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days.toString().padStart(2, '0');
  document.querySelector(".hours").innerHTML = hours.toString().padStart(2, '0');
  document.querySelector(".minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.querySelector(".seconds").innerHTML = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(timer);
    document.querySelector(".days").innerHTML = "00";
    document.querySelector(".hours").innerHTML = "00";
    document.querySelector(".minutes").innerHTML = "00";
    document.querySelector(".seconds").innerHTML = "00";
  }
}, 1000);

// إعداد الـ Swiper
const swiper = new Swiper(".mySwiper", {
  loop: true,
    autoplay: {
    delay: 2000,
  },
  spaceBetween: 30,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
     clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3.5,
    },
  },
})

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar .nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      // في حال الرابط هو مجرد #
      if (link.getAttribute("href") === "#") {
        e.preventDefault();
      }

      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

