import './style.scss';

import WelcomeScene from "./scenes/WelcomeScene";
import App from './App';

import sound from './sound.mp3';

const audio = new Audio(sound);
audio.play();

const app = new App("root");
app.loadScene(WelcomeScene);
