const createPageSpy = require('./PageSpy.js');
const Switcher = require('../Switcher.js');

QUnit.test("Test that given that switcher has one page when backwards is triggered, switcher does nothing on the page.",(assert) => {
    let pages = createPageSpiesArrayWithLength(1),
        switcher = Switcher.createSinglePaneSwitcher(pages);
    switcher.backwards();
    assert.ok(pages[0].timesShown === 0);
    assert.ok(pages[0].timesHidden === 0);
});

QUnit.test("Test that given that switcher has 2 pages when next and then backwards is triggered, switcher hides current page",(assert) => {
    let pages = createPageSpiesArrayWithLength(2),
        switcher = Switcher.createSinglePaneSwitcher(pages);
    switcher.next();
    switcher.backwards();
    assert.ok(pages[0].isShown());
    assert.ok(!pages[1].isShown());
});

QUnit.test("Test that given that switcher has 2 pages when next and then backwards twice, switcher hides current page and shows previous (next backwards is ignored.)",(assert) => {
    let pages = createPageSpiesArrayWithLength(2),
        switcher = Switcher.createSinglePaneSwitcher(pages);
    switcher.next();
    switcher.backwards();
    switcher.backwards();
    assert.ok(pages[0].isShown());
    assert.ok(!pages[1].isShown());
});

QUnit.test("Test that given that switcher has 3 pages when nexted twice and then backwards is triggered, switcher hides current page",(assert) => {
    let pages = createPageSpiesArrayWithLength(3),
        switcher = Switcher.createSinglePaneSwitcher(pages);
    switcher.next();
    switcher.next();
    switcher.backwards();
    assert.ok(!pages[0].isShown());
    assert.ok(pages[1].isShown());
    assert.ok(!pages[2].isShown());
});

QUnit.test("Test that given that switcher has 3 pages when nexted twice and then backward twice, switcher hides current page",(assert) => {
    let pages = createPageSpiesArrayWithLength(3),
        switcher = Switcher.createSinglePaneSwitcher(pages);
    switcher.next();
    switcher.next();
    switcher.backwards();
    switcher.backwards();
    assert.ok(pages[0].isShown());
    assert.ok(!pages[1].isShown());
    assert.ok(!pages[2].isShown());
});

function createPageSpiesArrayWithLength(length){
    let pageSpyArray = [];
    let i = 1;
    while(i++ <= length)
        pageSpyArray.push(createPageSpy());
    return pageSpyArray;
}
