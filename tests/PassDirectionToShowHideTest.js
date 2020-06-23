const createPageSpy = require('./PageSpy.js');
const Switcher = require('../Switcher.js');

QUnit.test("Test that given that single pane switcher has 2 pages when next is triggered direction is passed.",(assert) => {
    let pages = createAlwaysShownPageSpiesArrayWithLength(2),
        switcher = Switcher.createSinglePaneSwitcher(pages);
    switcher.next();
    assert.ok(pages[0].givenDirection() === 'forwards');
    assert.ok(pages[1].givenDirection() === 'forwards');
});

QUnit.test("Test that given that single pane switcher has 2 pages when backwards is triggered direction is passed.",(assert) => {
    let pages = createAlwaysShownPageSpiesArrayWithLength(2),
        switcher = Switcher.createSinglePaneSwitcher(pages);
    switcher.next();
    switcher.backwards();
    assert.ok(pages[0].givenDirection() === 'backwards');
    assert.ok(pages[1].givenDirection() === 'backwards');
});

function createAlwaysShownPageSpiesArrayWithLength(length){
    let pageSpyArray = [];
    let i = 1;
    while(i++ <= length)
        pageSpyArray.push(createPageSpy(true));
    return pageSpyArray;
}
