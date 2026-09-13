document.querySelectorAll(".accordion").forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");
  const content = accordion.querySelector(".accordion-content");
  const inner = accordion.querySelector(".accordion-inner");

  header.addEventListener("click", () => {
    const isOpen = accordion.classList.contains("open");
    if (isOpen) {
      content.style.height = content.scrollHeight + "px";
      requestAnimationFrame(() => {
        content.style.height = "0px";
      });
      accordion.classList.remove("open");
    } else {
      accordion.classList.add("open");
      content.style.height = inner.offsetHeight + "px";
      content.addEventListener(
        "transitionend",
        () => {
          if (accordion.classList.contains("open")) {
            content.style.height = "auto";
          }
        },
        { once: true }
      );
    }
  });
});
