module.exports = class CardSwitcher{

    constructor(pages,config){
        this.config = config;
        this.pages = pages;
        this.currentPageIndex = 0;
    }

    next(){
        if(this.hasMoreThanOnePage() && this.isNotOnFinalPage()){
            this.config.updateNext(this.pages[this.currentPageIndex],this.pages[this.currentPageIndex + 1]);
            this.currentPageIndex++;
        }
    }

    backwards(){
        if(this.hasMoreThanOnePage() && this.isNotOnFirstPage()){
            this.config.updateBackwards(this.pages[this.currentPageIndex],this.pages[this.currentPageIndex - 1]);
            this.currentPageIndex--;
        }
    }

    isNotOnFirstPage() {
        return this.currentPageIndex > 0;
    }

    hasMoreThanOnePage() {
        return this.pages.length !== 1;
    }

    isNotOnFinalPage(){
        return this.currentPageIndex !== this.pages.length - 1;
    }

}