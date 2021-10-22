import { LightningElement } from 'lwc';
// import { data } from 'my/data';

export default class Splash extends LightningElement {
    themes = [];
    disabled = false;
    buttonLabel = 'Start Game';
    buttonEle;
    gameObj;

    connectedCallback() {
        /* this.themes = data.map((a) => {
            return { name: a.theme, icon: a.iconurl };
        }); */
    }

    renderedCallback() {
        if (!this.buttonEle) {
            this.buttonEle = this.template.querySelector('.button');
        }
    }

    handleClick(e) {
        const event = new CustomEvent('themeselected', {
            detail: { name: e.currentTarget.dataset.theme }
        });
        this.dispatchEvent(event);
    }

    validateGameKey(){
        const gamekey = this.template.querySelector('.gamecode').value;
        const playername = this.template.querySelector('.playername').value;
        if (gamekey && gamekey.trim().length > 0 && playername && playername.trim().length > 0) {
            this.disabled = true;
            this.buttonLabel = 'Please wait...';
            localStorage.setItem('player_name', playername);
            fetch('/api/getletters?id=' + encodeURIComponent(gamekey) + '&player_name=' + encodeURIComponent(playername))
                .then((response) => response.json())
                .then((data) => {
                    if(data.player_id){
                        localStorage.setItem('player_id', data.player_id);
                    }
                    if (data.wordsList.length > 0) {
                        this.gameObj = data.wordsList[0];
                        const event = new CustomEvent('themeselected', {
                            detail: { gameObj: this.gameObj }
                        });
                        this.dispatchEvent(event);
                        this.dataloaded = true;
                        this.gameKey = gamekey;
                    } else {
                        this.buttonEle.classList.add('animate');
                        this.disabled = false;
                        this.buttonLabel = 'Start Game';
                        setTimeout(() => {
                            this.buttonEle.classList.remove('animate');
                        }, 1000);
                    }
                });
        } else {
            this.buttonEle.classList.add('animate');
            this.disabled = false;
            this.buttonLabel = 'Start Game';
            setTimeout(() => {
                this.buttonEle.classList.remove('animate');
            }, 1000);
        }
    }
}
