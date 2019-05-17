import './game_window.css';
import { generateCoordinates, getAmountOfObstacles } from '../../helpers/index';

class CreateObstacles {
  constructor(displayInfo) {
    this.realGameFieldWidth = displayInfo.realGameFieldWidth;
    this.realGameFieldHeight = displayInfo.realGameFieldHeight;
    this.obstacleId = CreateObstacles.idCounter;
    this.createObstacles();
  }

  createObstacles() {
    const {
      realGameFieldWidth, realGameFieldHeight,
    } = this;
    const obstacle = document.createElement('div');
    CreateObstacles.idCounter += 1;
    obstacle.className = 'obstacle';
    obstacle.style.width = '30px';
    obstacle.style.height = '30px';
    const coordinat = generateCoordinates(realGameFieldWidth, realGameFieldHeight, CreateObstacles.obstaclesCoordinates);
    CreateObstacles.obstaclesCoordinates.push({ top: coordinat.top, left: coordinat.left });
    obstacle.style.top = `${coordinat.top}px`;
    obstacle.style.left = `${coordinat.left}px`;
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
    const borderForWindow = 15;
    const gameWindow = document.createElement('div');
    gameWindow.id = 'game_window';
    gameWindow.style.width = `${this.displayWidth}px`;
    gameWindow.style.height = `${this.displayHeight}px`;
    gameWindow.style.border = `${borderForWindow}px solid #fad2d2`;
    this.realGameFieldWidth = this.displayWidth - borderForWindow * 2;
    this.realGameFieldHeight = this.displayHeight - borderForWindow * 2;
    document.body.appendChild(gameWindow);
    this.createObstaclesForGame();
  }

  createObstaclesForGame() {
    const { realGameFieldWidth, realGameFieldHeight } = this;
    const amountOfObstacles = getAmountOfObstacles(realGameFieldWidth, realGameFieldHeight);
    for (let i = 0; i < amountOfObstacles; i += 1) {
      new CreateObstacles({ realGameFieldWidth, realGameFieldHeight });
    }
  }
}

export default GameWindow;
