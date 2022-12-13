const submit = document.querySelector(".submit");
const option = document.querySelector(".select");

submit.addEventListener("click", () =>
  option.value === "yes"
    ? console.log("good job!")
    : window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
);
