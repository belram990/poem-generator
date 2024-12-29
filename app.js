function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Hold fast to dreams",
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
