const createPageSpy = require('./PageSpy.js');
const CardSwitcher = require('../CardSwitcher.js');

QUnit.test("Test that given that cardswitcher has one page when next is triggered, cardswitcher does nothing on the page.",(assert) => {
    let pages = createAlwaysShownPageSpiesArrayWithLength(1),
        switcher = new CardSwitcher(pages);
    switcher.next();
    assert.ok(pages[0].timesShown === 0);
    assert.ok(pages[0].timesHidden === 0);
});

QUnit.test("Test that given that cardswitcher has twopages when next is triggered, cardswitcher hides current only.",(assert) => {
    let pages = createAlwaysShownPageSpiesArrayWithLength(2),
        switcher = new CardSwitcher(pages);
    switcher.next();
    assert.ok(!pages[0].isShown());
    assert.ok(pages[1].timesHidden === 0);
    assert.ok(pages[1].timesShown === 0);
});

QUnit.test("Test that given that cardswitcher has three pages when next is triggered twice, cardswitcher is on the final page and the two before are hidden.",(assert) => {
    let pages = createAlwaysShownPageSpiesArrayWithLength(3),
        switcher = new CardSwitcher(pages);
    switcher.next();
    switcher.next();
    assert.ok(!pages[0].isShown());
    assert.ok(!pages[1].isShown());
    assert.ok(pages[2].timesHidden === 0);
    assert.ok(pages[2].timesShown === 0);
});

QUnit.test("Test that given that cardswitcher has three pages when next is triggered three times, cardswitcher is remains on the final page and the two before are hidden.",(assert) => {
    let pages = createAlwaysShownPageSpiesArrayWithLength(3),
        switcher = new CardSwitcher(pages);
    switcher.next();
    switcher.next();
    switcher.next();
    assert.ok(!pages[0].isShown());
    assert.ok(!pages[1].isShown());
    assert.ok(pages[2].timesHidden === 0);
    assert.ok(pages[2].timesShown === 0);
});

QUnit.test("Test that given that cardswitcher has 1 page when backwards is triggered, cardswitcher remains on the first page.",(assert) => {
    let pages = createAlwaysShownPageSpiesArrayWithLength(1),
        switcher = new CardSwitcher(pages);
    switcher.backwards();
    assert.ok(pages[0].timesHidden === 0);
    assert.ok(pages[0].timesShown === 0);
});

QUnit.test("Test that given that cardswitcher has 2 pages when next then backwards is triggered, cardswitcher shows first page without hidding current.",(assert) => {
    let pages = createAlwaysShownPageSpiesArrayWithLength(2),
        switcher = new CardSwitcher(pages);
    switcher.next();
    switcher.backwards();
    assert.ok(pages[0].isShown());
    assert.ok(pages[1].timesHidden === 0);
    assert.ok(pages[1].timesShown === 0);
});

QUnit.test("Test that given that cardswitcher has 3 pages when next is triggered twice then backwards once, cardswitcher shows second page without hidding third.",(assert) => {
    let pages = createAlwaysShownPageSpiesArrayWithLength(3),
        switcher = new CardSwitcher(pages);
    switcher.next();
    switcher.next();
    switcher.backwards();
    assert.ok(pages[1].isShown());
    assert.ok(pages[2].timesHidden === 0);
    assert.ok(pages[2].timesShown === 0);
});

QUnit.test("Test that given that cardswitcher has 2 pages when next is triggered then backwards twice, cardswitcher remains on first page.",(assert) => {
    let pages = createAlwaysShownPageSpiesArrayWithLength(2),
        switcher = new CardSwitcher(pages);
    switcher.next();
    switcher.backwards();
    switcher.backwards();
    assert.ok(pages[0].isShown());
    assert.ok(pages[1].timesHidden === 0);
    assert.ok(pages[1].timesShown === 0);
});

function createAlwaysShownPageSpiesArrayWithLength(length){
    let pageSpyArray = [];
    let i = 1;
    while(i++ <= length)
        pageSpyArray.push(createPageSpy(true));
    return pageSpyArray;
}