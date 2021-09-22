import { LightningElement, api } from 'lwc';
import { data } from 'my/data';
import Sortable from 'sortablejs';

const TOTAL_SECONDS = 45;
const CHARACTERS = 'abcdefghijklmno';
const WAIT_SECONDS = 10;

export default class Game extends LightningElement {
    @api theme;
    themeData;
    sortInitialized = false;

    sortable;

    startTimestamp;
    endTimestamp;
    gameOver = false;

    timeUp = false;
    countDown;

    totalSeconds = TOTAL_SECONDS;
    secondsLeft = TOTAL_SECONDS;

    score = 0;
    gameStarted = false;

    waitTimeLeft = WAIT_SECONDS;
    waitCountdown;

    get duration() {
        if (this.startTimestamp && this.endTimestamp) {
            return Math.floor((this.endTimestamp - this.startTimestamp) / 1000);
        }
        return '';
    }

    connectedCallback() {
        if (this.theme) {
            this.themeData = data.filter((el) => {
                return el.theme === this.theme;
            })[0];
            this.themeData.column1 = this.themeData.column1.map(
                (ele, index) => {
                    return {
                        ...ele,
                        pos: index + 1
                    };
                }
            );
            this.waitCountdown = setInterval(() => {
                if (this.waitTimeLeft > 1) {
                    this.waitTimeLeft--;
                } else {
                    this.startGame();
                    clearInterval(this.waitCountdown);
                }
            }, 1000);
        }
    }

    startGame() {
        this.gameStarted = true;
        const d = new Date();
        this.startTimestamp = d.getTime();
        this.countDown = setInterval(() => {
            this.secondsLeft--;
            if (this.secondsLeft === 0) {
                this.timeUp = true;
                clearInterval(this.countDown);
                this.validate();
            }
        }, 1000);
    }

    renderedCallback() {
        if (!this.sortInitialized && this.gameStarted) {
            let listHtml = '';
            this.themeData.column2.forEach((element, index) => {
                listHtml += `<li class="slds-item" data-key="${element.key}">
                        <article class="slds-tile slds-tile_board">
                            <div class="slds-tile__detail">
                                <p class="slds-text-heading_medium">${CHARACTERS.charAt(
                                    index
                                )}. ${element.value}</p>
                            </div>
                        </article>
                    </li>`;
            });
            const el = this.template.querySelector('.sortable');
            // eslint-disable-next-line @lwc/lwc/no-inner-html
            el.innerHTML = listHtml;
            this.sortable = Sortable.create(el, {
                animation: 250,
                ghostClass: 'ghost'
            });
            this.sortInitialized = true;
        }
    }

    validate() {
        const d = new Date();
        this.endTimestamp = d.getTime();
        this.gameOver = true;
        clearInterval(this.countDown);
        const el = this.template.querySelectorAll('.sortable li');
        let allCorrect = true;
        el.forEach((ele, index) => {
            if (ele.dataset.key === this.themeData.ans[index]) {
                ele.classList.add('correct');
                this.score += 10;
            } else {
                ele.classList.add('wrong');
                allCorrect = false;
            }
        });
        if (allCorrect) {
            this.score += this.secondsLeft;
        }
        this.sortable.destroy();
    }
}
