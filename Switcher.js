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
        currentPage.hide('forwards');
        nextPage.show('forwards');
    }

    doBackwards(currentPage,previousPage){
        currentPage.hide('backwards');
        previousPage.show('backwards');
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
