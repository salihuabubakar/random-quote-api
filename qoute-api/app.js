async function randomQuote(randomQuoteKey) {
  // const randomQuoteKey = "random";
  await fetch(
    "https://quotes15.p.rapidapi.com/quotes/" + randomQuoteKey + "/",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": "366885d6aamsh4e6d68f53039a18p10cb87jsn6a24721668ba",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {

      const {content, originator} = response;

      document.querySelector(".quote").innerHTML = content;
      document.querySelector(".quote").classList.remove("skeleton-loading");

      document.querySelector(".author").innerHTML = "~ " + originator.name;
      document.querySelector(".author").classList.remove("skeleton-loading");
    })

    .catch((err) => {
      console.error(err);
    });
};



 function clickToGenerate () {
    randomQuote(document.querySelector("button").value="random");
  }

  document.querySelector("button").addEventListener("click", function () {
    clickToGenerate();
});

