const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // 모든 버튼 비활성화
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    // 타겟 버튼 활성화
    e.target.classList.add("active");
    // 모든 article 비활성화
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    // 타겟 article 활성화
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});