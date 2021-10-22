import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    gameObj;

    handleThemeSelect(event) {
        this.gameObj = event.detail.gameObj;
    }
}
