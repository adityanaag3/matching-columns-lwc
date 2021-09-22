import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    selectedTheme;

    handleThemeSelect(event) {
        this.selectedTheme = event.detail.name;
    }
}
