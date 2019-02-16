const SwitcherMachine = require("./switchers/SwitcherMachine.js");

class CardSwitcherConfig {

    updateNext(currentPage,nextPage){
        currentPage.hide();
    }

    updateBackwards(currentPage,previousPage){
        previousPage.show();
    }

}

class SingleSwitcherConfig {

    updateNext(currentPage,nextPage){
        currentPage.hide();
        nextPage.show();
    }

    updateBackwards(currentPage,previousPage){
        currentPage.hide();
        previousPage.show();
    }

}

module.exports = {

    createCardSwitcher: function(pages){
        return new SwitcherMachine(pages,new CardSwitcherConfig());
    },

    createSinglePaneSwitcher: function(pages){
        return new SwitcherMachine(pages,new SingleSwitcherConfig());
    }

}