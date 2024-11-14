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
    let timeLeft = 60; 
    let timerInterval; 
    let gameInterval;  

    const scoreElement = document.getElementById("score");
    const currentCountryElement = document.getElementById("current-country");
    const countryCountElement = document.getElementById("country-count");
    const timerElement = document.getElementById("timer");
    const restartButton = document.getElementById("restart");

   
    function pickNewCountry() {
        if (countryCount >= countries.length) {
            alert("Oyun bitti! Final skorunuz: " + score + "%");
            restartGame();
            return;
        }
        correctCountry = countries[Math.floor(Math.random() * countries.length)];
        currentCountryElement.textContent = correctCountry.replace(/([A-Z])/g, ' $1').trim();  
        countryCountElement.textContent = `${countryCount + 1}/${countries.length}`; 
    }

    
    function updateTimer() {
        if (timeLeft > 0) {
            timeLeft--;
            timerElement.textContent = timeLeft;  
        } else {
            clearInterval(timerInterval); 
            alert("Zaman doldu! Oyun bitti. Final skorunuz: " + score + "%"); 
            clearInterval(gameInterval); 
        }
    }

   
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
        timeLeft = 60;  
        scoreElement.textContent = score + "%";
        timerElement.textContent = timeLeft;
        clearInterval(timerInterval); 
        clearInterval(gameInterval);   

    
        timerInterval = setInterval(updateTimer, 1000);  

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
  
