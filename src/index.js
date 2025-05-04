function generatePoem(event) {
  event.preventDefault();
  //alert("Generating Poem...");

  new Typewriter("#poem", {
    strings: "Thia poem is really dope",
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
