module.exports = class PageSwitcher {
    
    constructor(pages){
        this.pages = pages;
        this.currentPageIndex = 0;
    }

    next(){
        if(this.hasMoreThanOnePage() && this.isNotOnFinalPage()){
            this.pages[this.currentPageIndex++].hide();
            this.pages[this.currentPageIndex].show();
        }
    }

    backwards(){
        if(this.hasMoreThanOnePage() && this.isNotOnFirstPage()) {
            this.pages[this.currentPageIndex].hide();
            this.pages[--this.currentPageIndex].show();
        }
    }

    isNotOnFirstPage() {
        return this.currentPageIndex !== 0;
    }

    hasMoreThanOnePage(){
        return this.pages.length > 1;
    }

    isNotOnFinalPage(){
        return this.currentPageIndex !== this.pages.length - 1;
    }

}