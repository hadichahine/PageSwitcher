module.exports = function createPageSpy(){
    return new PageSpy();
}

class PageSpy {

    constructor(){
        this.timesShown = 0;
        this.timesHidden = 0;
    }

    show(){
        this.timesShown === undefined ? this.timesShown = 1 : this.timesShown++;
        this.shown = true;
    }

    hide(){
        this.timesHidden === undefined ? this.timesHidden = 1 : this.timesHidden++;
        this.shown = false;
    }

    isShown(){
        return this.shown;
    }

}