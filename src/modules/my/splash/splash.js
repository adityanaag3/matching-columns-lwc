import { LightningElement } from 'lwc';
import { data } from 'my/data';

export default class Splash extends LightningElement {
    themes = [];

    connectedCallback() {
        this.themes = data.map((a) => {
            return { name: a.theme, icon: a.iconurl };
        });
    }

    handleClick(e) {
        const event = new CustomEvent('themeselected', {
            detail: { name: e.currentTarget.dataset.theme }
        });
        this.dispatchEvent(event);
    }
}
