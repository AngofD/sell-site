const galleryItems = [
  { src: "photos/main_photo.jpg", thumb: "assets/thumbs/main_photo.jpg", alt: "Загальний вигляд установки Hammelmann", caption: "Головний вигляд установки" },
  { src: "photos/photo_1_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_1_2026-08-01_16-01-53.jpg", alt: "Установка Hammelmann у дерев'яній упаковці", caption: "Стан зберігання в упаковці" },
  { src: "photos/photo_2_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_2_2026-08-01_16-01-53.jpg", alt: "Вузол насоса та упаковка установки", caption: "Насосна частина в упаковці" },
  { src: "photos/photo_3_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_3_2026-08-01_16-01-53.jpg", alt: "Електрична шафа установки Hammelmann", caption: "Електрична частина" },
  { src: "photos/photo_4_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_4_2026-08-01_16-01-53.jpg", alt: "Пакування вузлів установки", caption: "Вузли в заводській консервації" },
  { src: "photos/photo_5_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_5_2026-08-01_16-01-53.jpg", alt: "Шильдик та верхня частина установки Hammelmann", caption: "Маркування та стан корпусу" },
  { src: "photos/photo_6_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_6_2026-08-01_16-01-53.jpg", alt: "Плунжерна частина та з'єднання установки", caption: "Робочі вузли та з'єднання" },
  { src: "photos/photo_7_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_7_2026-08-01_16-01-53.jpg", alt: "Установка в контейнері з пакуванням", caption: "Зберігання у контейнері" },
  { src: "photos/photo_8_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_8_2026-08-01_16-01-53.jpg", alt: "Технічний вузол установки у дерев'яній тарі", caption: "Насосна зона в упаковці" },
  { src: "photos/photo_9_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_9_2026-08-01_16-01-53.jpg", alt: "Складський стан установки Hammelmann", caption: "Складський вигляд обладнання" },
  { src: "photos/photo_10_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_10_2026-08-01_16-01-53.jpg", alt: "Комплектуючі установки на підлозі складу", caption: "Частина комплектуючих" },
  { src: "photos/photo_11_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_11_2026-08-01_16-01-53.jpg", alt: "Шланги та додаткові елементи комплектації", caption: "Шланги та робочі елементи" },
  { src: "photos/photo_12_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_12_2026-08-01_16-01-53.jpg", alt: "Електрична панель керування установки", caption: "Панель керування" },
  { src: "photos/photo_13_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_13_2026-08-01_16-01-53.jpg", alt: "Крупний план вузла Hammelmann", caption: "Крупний план робочого вузла" },
  { src: "photos/photo_14_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_14_2026-08-01_16-01-53.jpg", alt: "Жовта частина корпусу та арматура установки", caption: "Корпус та арматура" },
  { src: "photos/photo_15_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_15_2026-08-01_16-01-53.jpg", alt: "Установка в ящику з пакуванням", caption: "Консервація та захист під час зберігання" },
  { src: "photos/photo_16_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_16_2026-08-01_16-01-53.jpg", alt: "Кнопки та індикатори керування установки", caption: "Органи керування" },
  { src: "photos/photo_17_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_17_2026-08-01_16-01-53.jpg", alt: "Окремий елемент з кабелем та шлангом", caption: "Додатковий робочий елемент" },
  { src: "photos/photo_18_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_18_2026-08-01_16-01-53.jpg", alt: "Дерев'яна тара установки Hammelmann", caption: "Транспортна тара" },
  { src: "photos/photo_19_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_19_2026-08-01_16-01-53.jpg", alt: "Вигляд установки зверху в тарі", caption: "Вигляд зверху на агрегат" },
  { src: "photos/photo_20_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_20_2026-08-01_16-01-53.jpg", alt: "Крупний план технічного бака установки", caption: "Технічний бак" },
  { src: "photos/photo_21_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_21_2026-08-01_16-01-53.jpg", alt: "Шильдик установки Hammelmann з технічними даними", caption: "Фото заводського шильдика" },
  { src: "photos/photo_22_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_22_2026-08-01_16-01-53.jpg", alt: "Табличка обладнання на жовтому корпусі", caption: "Маркування моделі" },
  { src: "photos/photo_23_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_23_2026-08-01_16-01-53.jpg", alt: "Арматура та кабелі установки Hammelmann", caption: "Кабелі та з'єднання" },
  { src: "photos/photo_24_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_24_2026-08-01_16-01-53.jpg", alt: "Крупний план технічного вузла всередині контейнера", caption: "Вузол з боку приводу" },
  { src: "photos/photo_25_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_25_2026-08-01_16-01-53.jpg", alt: "Насосна частина установки в упаковці", caption: "Насосна частина" },
  { src: "photos/photo_26_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_26_2026-08-01_16-01-53.jpg", alt: "Крупний план електромотора Hammelmann", caption: "Привідний вузол" },
  { src: "photos/photo_27_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_27_2026-08-01_16-01-53.jpg", alt: "Електродвигун та обв'язка установки", caption: "Електродвигун та обв'язка" },
  { src: "photos/photo_28_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_28_2026-08-01_16-01-53.jpg", alt: "Вузол з рукавами високого тиску", caption: "Підключення високого тиску" },
  { src: "photos/photo_29_2026-08-01_16-01-53.jpg", thumb: "assets/thumbs/photo_29_2026-08-01_16-01-53.jpg", alt: "Установка в тарі з оглядом насосного блоку", caption: "Огляд насосного блоку в упаковці" }
];

const galleryGrid = document.querySelector("#gallery-grid");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxCounter = document.querySelector("#lightbox-counter");
const lightboxClose = document.querySelector(".lightbox__close");
const prevButton = document.querySelector(".lightbox__nav--prev");
const nextButton = document.querySelector(".lightbox__nav--next");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const yearNode = document.querySelector("#current-year");

let activeIndex = 0;
let touchStartX = 0;

const renderGallery = () => {
  const markup = galleryItems
    .map(
      (item, index) => `
        <button class="gallery-card" type="button" data-index="${index}" aria-label="Відкрити фото ${index + 1}">
          <img
            src="${item.thumb}"
            alt="${item.alt}"
            loading="lazy"
            decoding="async"
          />
        </button>
      `
    )
    .join("");

  galleryGrid.innerHTML = markup;
};

const updateLightbox = (index) => {
  const item = galleryItems[index];
  activeIndex = index;
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxCaption.textContent = item.caption;
  lightboxCounter.textContent = `${index + 1} / ${galleryItems.length}`;
};

const openLightbox = (index) => {
  closeMenu();
  updateLightbox(index);
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
};

const closeLightbox = () => {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
};

const showNext = () => updateLightbox((activeIndex + 1) % galleryItems.length);
const showPrev = () => updateLightbox((activeIndex - 1 + galleryItems.length) % galleryItems.length);

const closeMenu = () => {
  menuToggle.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
};

renderGallery();

galleryGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".gallery-card");
  if (!card) return;
  openLightbox(Number(card.dataset.index));
});

lightbox.addEventListener("click", (event) => {
  if (event.target.dataset.close === "true") {
    closeLightbox();
  }
});

lightboxClose.addEventListener("click", closeLightbox);
nextButton.addEventListener("click", showNext);
prevButton.addEventListener("click", showPrev);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
    closeMenu();
  }

  if (!lightbox.classList.contains("is-open")) return;
  if (event.key === "ArrowRight") showNext();
  if (event.key === "ArrowLeft") showPrev();
});

lightbox.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
});

lightbox.addEventListener("touchend", (event) => {
  const delta = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(delta) < 40) return;
  if (delta < 0) showNext();
  if (delta > 0) showPrev();
});

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  siteNav.classList.toggle("is-open", !expanded);
});

document.addEventListener("click", (event) => {
  if (!siteNav.classList.contains("is-open")) return;
  if (event.target.closest(".site-nav") || event.target.closest(".menu-toggle")) return;
  closeMenu();
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

yearNode.textContent = new Date().getFullYear();
