# JS Climber


## Background
JS Climber is a 2D platformer inspired by the game, Jump King. The player controls a climber whose goal is to reach the top of every level by jumping on platforms. The climber can jump further by holding down ↓ (DOWN ARROW) based on a power bar. Once the level is finished, the user will be entered in the list of high scores with their respective completion time.

## Controls
- A or ←: Move left
- D or →: Move right
- S or ↓: Jump (based on power bar)

## Functionality & MVP
In JS Climber, users will be able to:
1. Move left or right, and be able to jump vertically and horizontally
2. Be able to move on floors, platforms, etc.
3. Can jump further based on a visual power bar
4. Keep track of time and get a high score
5. Play the game live on Heroku
6. Restart the level

Bonus MVPs:
- Game starting menu
- Various color themes
- Different types of platforms (e.g., can only land on platforms with correct JS syntax)

## <a href="https://wireframe.cc/4kg83U">Wireframes</a>
<img src="https://i.ibb.co/RSZzsXY/wireframe.png" />

## Architecture and Technologies
Technologies used to develop this game:
- Javascript (game logic)
- Canvas (2d renderer)
- Webpack to bundle js files
- Firebase to store high scores in Firebase NoSQL cloud DB
- Heroku to deploy for live production

## Implementation Timeline
- Day 1: 
  - Set up file structure and install necessary node modules
  - Research and write basic game logic to handle ability to move and jump (MVP 1)
  
- Day 2:
  - Continue with game logic to handle floors and platforms (MVP 2)
  - Work out an initial version to make jump vary based on a power bar (MVP 3)
  
- Day 3:
  - Finish implementation of power-based jump (MVP 3)
  - Create an object to keep track of time elapsed since start of the level (MVP 4)
  
- Day 4:
  - Look into Heroku deployment using Firebase (MVP 5)
  - Create ability to handle restarting the level (MVP 6)
  
- Day 5:
  - Polish and refactor code if necessary
  - Bonus features
