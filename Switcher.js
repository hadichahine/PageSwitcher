const CardSwitcher = require("./CardSwitcher.js");
const SingleSwitcher = require("./SingleSwitcher.js");

module.exports = {

    createCardSwitcher: function(pages){
        return new CardSwitcher(pages);
    },

    createSinglePaneSwitcher: function(pages){
        return new SingleSwitcher(pages);
    }

}