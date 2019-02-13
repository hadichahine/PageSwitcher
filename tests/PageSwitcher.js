module.exports = class PageSwitcher {
    
    constructor(pages){
        this.pages = pages;
        this.currentPageIndex = 0;
    }

    next(){
        if(this.hasMoreThanOnePage() && this.didNotReachFinalPage()){
            this.pages[this.currentPageIndex].hide();
            this.pages[this.currentPageIndex + 1].show();
            this.currentPageIndex++;
        }
    }

    hasMoreThanOnePage(){
        return this.pages.length > 1;
    }

    didNotReachFinalPage(){
        return this.currentPageIndex !== this.pages.length - 1;
    }

}