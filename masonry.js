document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".masonry-item");

  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
    }, index * 150); // 150ms entre cada animação
  });
});
