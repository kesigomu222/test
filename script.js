
// スクロールすると要素がふわっと現れる
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealItems.forEach((item) => {
  observer.observe(item);
});

// マウスの位置に合わせて恐竜のイラストが少し動く
const dinosaur = document.querySelector(".dino-art svg");

document.addEventListener("mousemove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 16;
  const y = (event.clientY / window.innerHeight - 0.5) * 16;

  dinosaur.style.transform =
    `translate(${x}px, ${y}px)`;
});

// スマホなどタッチ操作ではマウス演出を使わない
if (window.matchMedia("(pointer: coarse)").matches) {
  dinosaur.style.transform = "none";
}
