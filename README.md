<h1 align="center"> Dino Jumps </h1>
<br />
<p align="center">
  <a href="http://taeinha.com/Dino-Jumps/">
    <img src="https://media.giphy.com/media/kcrJwL7Eq79Wm3mhPR/giphy.gif" alt="Dino Jumps" />
  </a>
</p>
<br />

## Background
Dino Jumps is a 2D platformer inspired by the game, Jump King. The player controls a climber whose goal is to reach the top of every level by jumping on platforms. The climber can jump further by holding down ↓ (DOWN ARROW) based on a power bar. Once the game is finished, the user will be entered in the list of high scores with their respective completion time if they made it into the top 10.

## Controls
- [←]: Move left
- [→]: Move right
- [↓]: Jump up (based on power bar)
- [↓ + →]: Jump right (based on power bar)
- [↓ + ←]: Jump left (based on power bar)
- [R]: Restart level

## Functionality & MVP
In Dino Jumps, users will be able to:
1. Move left or right, and be able to jump vertically and horizontally based on a visual power bar
2. Be able to collide with platforms on all sides
3. Keep track of time and get a high score, persisting data through Firebase DB
4. Sprite animations
5. Restart level, animate background

Bonus MVPs:
- Game starting menu
- Change wind (jump resistance) with an indicator
- Various color themes
- Different types of platforms (e.g., can only land on platforms with correct JS syntax, slippery, altered gravity, etc.)
- Play the character in a viewport (canvas focused on the climber)

## <a href="https://wireframe.cc/4kg83U">Wireframes</a>
<img src="https://i.ibb.co/Nry6vz2/Screen-Shot-2020-01-15-at-12-23-44-PM.png" />

## Architecture and Technologies
Technologies used to develop this game:
- Javascript (game logic, vanilla DOM)
- Canvas (2D renderer)
- Webpack to bundle js files
- Firebase to persist high scores in Firebase NoSQL real-time DB

## Implementation Timeline
- Day 1: 
  - Set up file structure and install necessary node modules
  - Research and write basic game logic to handle ability to move and jump
  
- Day 2:
  - Continue with game logic to handle floors and platforms 
  - Work out an initial version to make jump vary based on a power bar 
  
- Day 3:
  - Finish implementation of power-based jump
  - Create an object to keep track of time elapsed since start of the level 
  
- Day 4:
  - Look into Firebase so can high scores data can be persisted
  - Create ability to restart the level 
  
- Day 5:
  - Polish and refactor code if necessary
  - Bonus features
