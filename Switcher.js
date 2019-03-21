const PageStateMachine = require("./switchers/PageStateMachine");

class CardLikeStateTransitionHandler {

    doNext(currentPage,nextPage){
        currentPage.hide();
    }

    doBackwards(currentPage,previousPage){
        previousPage.show();
    }

}

class SingleSwitcherConfig {

    doNext(currentPage,nextPage){
        currentPage.hide();
        nextPage.show();
    }

    doBackwards(currentPage,previousPage){
        currentPage.hide();
        previousPage.show();
    }

}

module.exports = {

    createCardSwitcher: function(pages){
        return new PageStateMachine(pages,new CardLikeStateTransitionHandler());
    },

    createSinglePaneSwitcher: function(pages){
        return new PageStateMachine(pages,new SingleSwitcherConfig());
    }

}