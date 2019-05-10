
import './css/modules/game_window.css';
import heroLogick from './script/heroLogic';

const app = () => {
  const myApp = document.getElementById('app');
  const layout = document.createElement('div');
  layout.className = 'game_window';
  myApp.appendChild(layout);


  heroLogick();
};
export default app;
