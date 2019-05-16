import './game_window.css';
import generateCoordinates from '../../helpers/index';

class CreateObstacles {
  constructor(displayInfo) {
    this.displayHeight = displayInfo.displayHeight;
    this.displayWidth = displayInfo.displayWidth;
    this.border = displayInfo.borderForWindow;
    this.obstacleWidth = 30;
    this.obstacleId = CreateObstacles.idCounter;
    this.createObstacles();
  }

  createObstacles() {
    const {
      displayHeight, displayWidth, border, obstacleWidth,
    } = this;
    const obstacle = document.createElement('div');
    CreateObstacles.idCounter += 1;
    obstacle.className = 'obstacle';
    obstacle.style.width = `${obstacleWidth}px`;
    obstacle.style.height = `${obstacleWidth}px`;
    obstacle.style.top = `${generateCoordinates(displayHeight, border, obstacleWidth, CreateObstacles.obstaclesCoordinates)}px`;
    obstacle.style.left = `${generateCoordinates(displayWidth, border, obstacleWidth, CreateObstacles.obstaclesCoordinates)}px`;
    CreateObstacles.obstaclesCoordinates.push({ top: obstacle.style.top, left: obstacle.style.left });
    obstacle.innerHTML = this.obstacleId;
    document.body.appendChild(obstacle);
  }
}

CreateObstacles.idCounter = 0;
CreateObstacles.obstaclesCoordinates = [];

class GameWindow {
  constructor() {
    this.displayHeight = window.innerHeight;
    this.displayWidth = window.innerWidth;
    this.borderForWindow = 15;
    const gameWindow = document.createElement('div');
    gameWindow.id = 'game_window';
    gameWindow.style.width = `${this.displayWidth}px`;
    gameWindow.style.height = `${this.displayHeight}px`;
    gameWindow.style.border = `${this.borderForWindow}px solid #fad2d2`;
    document.body.appendChild(gameWindow);
    this.createObstaclesForGame();
  }

  createObstaclesForGame() {
    const { displayHeight, displayWidth, borderForWindow } = this;
    for (let i = 0; i < 30; i += 1) {
      new CreateObstacles({ displayHeight, displayWidth, borderForWindow });
    }
  }
}

export default GameWindow;
