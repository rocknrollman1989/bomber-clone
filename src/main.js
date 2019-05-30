import { GameWindow, CreateObstacles } from './script/components/GameWindow/GameWindow';
import Hero from './script/components/Hero/Hero';
import Bomb from './script/components/Bomb/Bomb';
import {
  firstPlayerAction, secondPlayerAction, actions,
} from './constants/actionConstants';
import {
  chekWayToCome, getAmountOfObstacles, checkTargetsToExpload, checkHeroToExpload,
} from './helpers';

class GameProcess {
  constructor() {
    this.gameWindow = new GameWindow();
    this.playerIsMoving.bind(this.gameWindow);
    this.createObstaclesForGame();
    this.firstPlayer = new Hero({
      top: 15, left: 15, name: 'Вася', firstPlayerAction,
    });
    this.secondPlayer = new Hero({
      top: this.gameWindow.realGameFieldHeight - 15, left: this.gameWindow.realGameFieldWidth - 15, name: 'Gans', secondPlayerAction,
    });
    this.firstPlayer.playerIsMoving = this.playerIsMoving.bind(this);
    this.secondPlayer.playerIsMoving = this.playerIsMoving.bind(this);
  }

  createObstaclesForGame() {
    const parentDiv = document.createElement('div');
    parentDiv.className = 'obstaclesContainer';
    document.body.appendChild(parentDiv);
    const {
      realGameFieldWidth, realGameFieldHeight, gameSquare,
    } = this.gameWindow;
    const amountOfObstacles = getAmountOfObstacles(realGameFieldWidth, realGameFieldHeight, gameSquare);
    let createObstacles;
    for (let i = 0; i < amountOfObstacles - 2; i += 1) {
      createObstacles = new CreateObstacles({ realGameFieldWidth, realGameFieldHeight, parentDiv });
    }
    this.createObstacles = createObstacles;
  }

  playerIsMoving(action, hero) {
    const { gameWindow, createObstacles } = this;
    const { obstaclesArray } = createObstacles;
    const leftPosition = Number.parseFloat(hero.style.left);
    const topPosition = Number.parseFloat(hero.style.top);
    switch (action) {
      case actions.ACTION_LEFT:
        // eslint-disable-next-line no-param-reassign
        hero.style.left = chekWayToCome(gameWindow, obstaclesArray, { leftPosition: leftPosition - 1, topPosition }, 'left');
        break;
      case actions.ACTION_RIGHT:
        // eslint-disable-next-line no-param-reassign
        hero.style.left = chekWayToCome(gameWindow, obstaclesArray, { leftPosition: leftPosition + 1, topPosition }, 'left');
        break;
      case actions.ACTION_DOWN:
        // eslint-disable-next-line no-param-reassign
        hero.style.top = chekWayToCome(gameWindow, obstaclesArray, { topPosition: topPosition + 1, leftPosition }, 'top');
        break;
      case actions.ACTION_UP:
        // eslint-disable-next-line no-param-reassign
        hero.style.top = chekWayToCome(gameWindow, obstaclesArray, { topPosition: topPosition - 1, leftPosition }, 'top');
        break;
      case actions.SET_BOMB:
        this.createBomb(hero);
        break;
      default: break;
    }
  }

  createBomb(hero) {
    const bomb = new Bomb(hero.style);
    bomb.bombIsExpload = this.bombIsExpload.bind(this);
  }

  bombIsExpload(coordinates, flameWidth) {
    const { obstaclesArray } = this.createObstacles;
    // const { secondPlayer, firstPlayer } = this;
    // console.log('left', firstPlayer.heroPerson.style.left);
    // console.log('top', firstPlayer.heroPerson.style.top);
    // const heroOneTarget = checkHeroToExpload(coordinates, flameWidth, firstPlayer);
    // const heroTwoTarget = checkHeroToExpload(coordinates, flameWidth, secondPlayer);
    const targets = checkTargetsToExpload(coordinates, flameWidth, obstaclesArray);
    // console.log(heroOneTarget);
    if (targets.length) {
      const bombed = { left: 999999, top: 999999, id: 999999 };
      targets.forEach((element) => {
        this.createObstacles.parentDiv.children[element.id].className = 'bombed';
        this.createObstacles.obstaclesArray[element.id] = bombed;
      });
    }
  }
}

new GameProcess();
