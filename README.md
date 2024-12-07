![alt text](https://www.freelogovectors.net/wp-content/uploads/2020/07/hacettepe-universitesi-logo-768x178.png)
# GMT458 INTERNET BASED GEOGRAPHICAL INFORMATION SYSTEMS

* 2200674039 EDANUR PAYCI

### Github-Pages of the Game
 * https://gmt-458-web-gis.github.io/geogame-edanurp/

## Aim of the Game

* The aim of this assignment is to design a GeoGame. A geo-game is an interactive game, in 
which a user interacts with the browser has a geo-component and tries to achieve a 
high-score.

## Title of the Game: Find Country

## Features
  - First, the user is asked to select a continent. <br>
  - After the continent is selected, the user is shown a random country name. <br>
  - If the correct country is clicked, the user is notified of the correct answer and is shown the next country name. <br>
  - The game has a time limit of 60 seconds and if it has not been done by the end of that time, a warning is given that the game is over and the final score is given. <br>
  - The game can be restarted with the “Restart” button. <br>

## Working Principle
  - The JavaScript file starts with the DOMContentLoaded event. <br>
  - A random country name is selected with the pickNewCountry function. <br>
  - The countryClicked function checks if the clicked country is correct. <br>
  - If the answer is correct, the country counter is incremented. If the answer is incorrect, the score is reduced proportionally out of 100%. <br>
  - The game is limited to 60 seconds, when the second runs out, a warning that the game is over and a final score is provided, giving the possibility to restart. <br>

## JavaScript Library Used
  - Three.js: On the first page of the game, it uses the Three.js library to create a 3D world map and moving stars in the background to invite the user into an interactive and visually immersive experience. This creates a visually striking atmosphere.

## Requirements
 - **HTML**: Used to create the structure of the page.
 - **CSS**: Used to determine the style and layout of the page.
 - **JavaScript**: Used to create dynamic content and manage user interactions.
 - **Three.js**: A popular JavaScript library used to create 3D graphics.

## Advanced Features
### Event Handlers
1- Country Click Handler
* Purpose: Triggered when a player clicks on a country. It checks if the clicked country matches the current target country and updates the score accordingly.

### Timer Update Handler
* Purpose: Updates the countdown timer every second and ends the game when time runs out.

### Restart Button Click Handler
* Purpose: Resets the game state, including the score, timer, and country count, allowing the player to start a new round.

## Closures 
* In the project, closures are used to store the game logic in a contained and secure way. In this way, variables are only accessible within the scope of the relevant function and the game logic is kept under control.In particular, the pickNewCountry function demonstrates the power of closures by preserving critical information about the game state at each call. This function consistently manages game progress and current state when determining the new country to be selected in a game round.

## Existing DOM Interactions
### 1- Score Display:
* scoreElement.textContent updates the player's current score after each correct or incorrect selection. This allows the player to constantly keep track of his progress and achievements.
### 2- Timer:
* The countdown is updated every second with timerElement.textContent. The timer helps the player to visually track the game time.
### 3- Country Highlighting:
* By clicking on the countries on the map, correct or incorrect selections are made and feedback is given. On the map, countries are defined as clickable items and the colours of these countries change when the user makes a correct or incorrect selection.

## Resources Used to Use Animated Text
* https://frontendresource.com/css-text-animations/#google_vignette
* https://devsnap.me/css-text-animations

## Resources for Adding Video to HTML Code
* https://www.youtube.com/watch?v=ts0mU1_fQVA
## Site used to Add Video
* https://pixabay.com/videos/search/star/
## Site for adding the three.js library
* https://www.youtube.com/watch?v=hNsn0CA94xg
  
## Screenshot of the Game

### The page that will appear when you first open it:
![image](https://github.com/user-attachments/assets/1e59354f-a499-4952-8d8c-fe3fefdc30fc)

### The screen that will appear when you click on the North American continent:
![image](https://github.com/user-attachments/assets/280b4564-2efa-45cb-9488-d3cc4bc3eb88)

### The screen that will appear when you click on the South American continent:
![image](https://github.com/user-attachments/assets/ba6bdb26-52a5-4253-bc64-62b01cd00385)

### The screen that will appear when you click on the Europe continent:
![image](https://github.com/user-attachments/assets/5366321b-fb16-4f6e-a561-f2095217a4ab)

### The screen that will appear when you click on the Africa continent:
![image](https://github.com/user-attachments/assets/1e874d8c-c435-4820-a600-fd8ac1d71ef7)

### The screen that will appear when you click on the Asia continent:
![image](https://github.com/user-attachments/assets/8355130c-448b-4a3f-a1b3-da907d12b796)

### The screen that will appear when you click on the Australia and Oceania continent:
![image](https://github.com/user-attachments/assets/10fd730a-1c38-4b0e-ab1d-445c2eb52d9b)

### When the time is over, the following warning is given on the screen:
![image](https://github.com/user-attachments/assets/ec23404f-78d1-423b-9d24-033bb22d9625)









