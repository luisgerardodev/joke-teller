const button = document.querySelector("#button");
const audioElement = document.querySelector("#audio");

// JokeAPI
const apiKey = "36a66de5bade4c8fb64a726158a835ff";
const apiURL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

// Get Joke from Joke API
const getJoke = async () => {
  let joke = "";
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    console.log(joke)
    // Text-to-Speech
    tellMe(joke);
  }
  catch (error) {
    console.log('whoops, error fetching joke', error);
  }
}

// Passing Joke to VoiceRSS API
const tellMe = (joke) => {
  console.log('tell me: ', joke);
  VoiceRSS.speech({
      key: apiKey,
      src: joke,
      hl: "en-us",
      v: "Linda",
      r: 0,
      c: "mp3",
      f: "44khz_16bit_stereo",
      ssml: false,
    });
}

// Event Listeners

button.addEventListener("click", () => {
  getJoke();
  // Disble Button
  button.disabled = true;
});

audioElement.addEventListener("ended", () => {
  // Enable Button
  button.disabled = false;
})


