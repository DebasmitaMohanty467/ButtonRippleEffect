const button = document.querySelector(".ripple-btn");

button.addEventListener("click",  function  (e) {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  const rect = this.getBoundingClientRect();
  // console.log(rect);
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
    //  console.log(this)
  this.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});
