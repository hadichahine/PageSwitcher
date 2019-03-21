module.exports = class PageStateMachine{

    constructor(pages,stateMachineTransitionHandler){
        this.stateMachineTransitionHandler = stateMachineTransitionHandler;
        this.pages = pages;
        this.currentPageIndex = 0;
    }

    next(){
        if(this.hasMoreThanOnePage() && this.isNotOnFinalPage()){
            this.stateMachineTransitionHandler.doNext(this.currentPage(),this.nextPage());
            this.currentPageIndex++;
        }
    }

    nextPage() {
        return this.pages[this.currentPageIndex + 1];
    }

    currentPage() {
        return this.pages[this.currentPageIndex];
    }

    backwards(){
        if(this.hasMoreThanOnePage() && this.isNotOnFirstPage()){
            this.stateMachineTransitionHandler.doBackwards(this.currentPage(),this.previousPage());
            this.currentPageIndex--;
        }
    }

    previousPage() {
        return this.pages[this.currentPageIndex - 1];
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