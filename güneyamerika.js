document.addEventListener("DOMContentLoaded", () => {
  const countries = [
      "Brazil", "Argentina", "Chile", "Peru", "Colombia",
      "Venezuela", "Ecuador", "Bolivia", "Paraguay",
      "Uruguay", "Guyana", "Suriname", "FrenchGuiana","FalklandIslands"
  ];

  let score = 100;
  let correctCountry = "";
  let countryCount = 0;

  const scoreElement = document.getElementById("score");
  const currentCountryElement = document.getElementById("current-country");
  const countryCountElement = document.getElementById("country-count");
  const restartButton = document.getElementById("restart");

  function pickNewCountry() {
      if (countryCount >= countries.length) {
          alert("Oyun bitti! Final skorunuz: " + score + "%");
          restartGame();
          return;
      }
      correctCountry = countries[Math.floor(Math.random() * countries.length)];
      currentCountryElement.textContent = correctCountry.replace(/([A-Z])/g, ' $1').trim();
      countryCountElement.textContent = `${countryCount}/${countries.length}`;
  }

  // Ülkeye tıklama olayını işleme
  function countryClicked(event) {
      const clickedCountry = event.target.id;
      if (clickedCountry === correctCountry) {
          alert("Doğru! " + clickedCountry + " seçildi.");
          countryCount++;
      } else {
          score -= Math.round(100 / countries.length); 
          alert("Yanlış! Bu " + clickedCountry + ". Doğru ülke " + correctCountry + " idi.");
      }
      scoreElement.textContent = score + "%";
      pickNewCountry();
  }

  function restartGame() {
      score = 100;
      countryCount = 0;
      scoreElement.textContent = score + "%";
      pickNewCountry();
  }

  countries.forEach(countryId => {
      const countryElement = document.getElementById(countryId);
      if (countryElement) {
          countryElement.addEventListener("click", countryClicked);
      }
  });

  if (restartButton) {
      restartButton.addEventListener("click", restartGame);
  }

  restartGame();
});
