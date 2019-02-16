const CardSwitcher = require("./switchers/CardSwitcher.js");
const SingleSwitcher = require("./switchers/SingleSwitcher.js");

module.exports = {

    createCardSwitcher: function(pages){
        return new CardSwitcher(pages);
    },

    createSinglePaneSwitcher: function(pages){
        return new SingleSwitcher(pages);
    }

}