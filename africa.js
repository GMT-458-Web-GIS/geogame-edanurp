document.addEventListener("DOMContentLoaded", () => {
    const countries = [
        "Algeria", "Benin", "Burkina Faso", "Ivory Coast", "Eritrea",
        "Botswana", "Gambia", "Guinea", "Guinea-Bissau",
        "Cameroon", "Kenya", "Libya", "Liberia","Mali","Morocco","Mauritania",
        "Niger","Nigeria","Republic of the Congo","Rwanda","Zambia","Senegal",
        "Sierra Leone","Somalia","South Sudan","Sudan","South Africa",
        "Tanzania","Chad","Uganda","West Morocco","Central African Republic",
        "Lesotho","Democratic Republic of Congo","Namibia","Ethiopia","Ghana",
        "Egypt","Tunisian","Togo","Burundi","Mozambique","Madagaskar","Malawi","Zimbabwe",
        "Swaziland","Gabon","Angola","W.Shara","Eq. Guinea","Djibouti"
    ];
  
    let score = 100;
    let correctCountry = "";
    let countryCount = 0;
  
    const scoreElement = document.getElementById("score");
    const currentCountryElement = document.getElementById("current-country");
    const countryCountElement = document.getElementById("country-count");
    const restartButton = document.getElementById("restart");
  
    // Yeni ülke seç
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
            score -= Math.round(100 / countries.length); // Yanlışta yüzdesel azaltma
            alert("Yanlış! Bu " + clickedCountry + ". Doğru ülke " + correctCountry + " idi.");
        }
        scoreElement.textContent = score + "%";
        pickNewCountry();
    }
  
    // Oyunu başlatma veya yeniden başlatma
    function restartGame() {
        score = 100;
        countryCount = 0;
        scoreElement.textContent = score + "%";
        pickNewCountry();
    }
  
    // Tüm ülke öğeleri için olay dinleyici ekle
    countries.forEach(countryId => {
        const countryElement = document.getElementById(countryId);
        if (countryElement) {
            countryElement.addEventListener("click", countryClicked);
        }
    });
  
    // Yeniden Başla butonuna olay dinleyici ekle
    if (restartButton) {
        restartButton.addEventListener("click", restartGame);
    }
  
    // Oyunu başlat
    restartGame();
  });
  