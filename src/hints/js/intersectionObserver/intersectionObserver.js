const imagesObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target); // прекращает отслеживать таргет
      } // происходит ленивая загрузка
    });
  },
  { rootMargin: "50px" } // img подгрузилась на 50px ранше
);
document
  .querySelectorAll("img")
  .forEach((image) => imagesObserver.observe(image));
/// video
const videoObserver = new IntersectionObserver(
  ([entry]) => {
    const video = entry.target;
    if (video.currentTime === 0) return;
    if (!entry.isIntersecting || entry.intersectionRatio <= 0.2) {
      video.pause();
    } else {
      video.play();
    }
  },
  {
    threshold: 0, // 0 верхнаяграница видео  1 нижняя
  }
);
document
  .querySelectorAll("video")
  .forEach((video) => videoObserver.observe(video));

// якорное меню
const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll(".menu-item");

const cb = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
      links.forEach((link) => link.classList.remove("active"));
      const activeId = entry.target.id;
      const activeLink = document.querySelector(
        `.menu-item[href="#${activeId}"]`
      );

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
};
const sectionObserver = new IntersectionObserver(cb, {
  threshold: [0.2, 0.5, 0.8],
});
sections.forEach((s) => sectionObserver.observe(s));
//-------------------------------------------------------------------------------
let nextPage = 2;

const infinteObserver = new IntersectionObserver(
  ([entry], observer) => {
    // проверяем что достигли последнего элемента
    if (entry.isIntersecting) {
      // перестаем его отслеживать
      observer.unobserve(entry.target);
      // и загружаем новую порцию контента
      loadNewCards(nextPage++);
    }
  },
  { threshold: 0.5 }
);

const loadNewCards = (page = 1) => {
  // запрашиваем посты по конкретной странице
  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    .then((res) => res.json())
    .then((cards) => {
      // для каждого поста создаем разметку
      cards.forEach((card) => {
        const post = document.createElement("div");
        post.innerHTML = `
          <h3>${card.id} ${card.title}</h3>
          <p>${card.body}</p>
        `;
        post.className = "card";
        document.body.append(post);
      });

      // для последней карточки снова добавляем обзёрвер
      const lastCard = document.querySelector(".card:last-child");
      if (lastCard) {
        infinteObserver.observe(lastCard);
      }
    })
    .catch(console.error);
};
loadNewCards();