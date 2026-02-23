function generator(response) {
  let poemText = document.querySelector("#poem-text");
  poemText.innerHTML = "";

  new Typewriter(poemText, {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
  });
}

let apiKey = "YOUR_API_KEY";
let context = "let it be a short poem";

function getPoem(event) {
  event.preventDefault();

  let poemText = document.querySelector("#poem-text");
  let button = document.querySelector(".sub");
  let userInput = document.querySelector("#prompter").value;

  poemText.innerHTML = "⏳ Generating your poem...";
  button.disabled = true;

  let prompt = `Give me a poem with the topic ${userInput}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(function (response) {
    generator(response);
    button.disabled = false;
  });
}

let poemElement = document.querySelector("#vernac");
poemElement.addEventListener("submit", getPoem);
