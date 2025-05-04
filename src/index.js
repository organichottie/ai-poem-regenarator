function displayPoem(response) {
  console.log("Poem Generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();
  //alert("Generating Poem...");

  let userInput = document.querySelector("#user-input");
  let apiKey = "11cb60e5ofea031ab3tc8e1af4a45bbb";
  let prompt = `User Input: Generate a poem about ${userInput.value}`;
  let context =
    "You are a romantic poem expert and enjoy writing poetry about love and life. Your mission is to geneate a 4 line romantic poem. Each line seperated by a <br/> element and on a new line. At the end of the poem, please sign <strong>Romatic AI</strong>";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
