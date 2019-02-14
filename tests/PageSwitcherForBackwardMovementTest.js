const createPageSpy = require('./PageSpy.js');
const PageSwitcher = require('../src/PageSwitcher.js');

QUnit.test("Test that given that pageswitcher has one page when backwards is triggered, pageswitcher does nothing on the page.",(assert) => {
    let pages = createPageSpiesArrayWithLength(1),
        pageSwitcher = new PageSwitcher(pages);
    pageSwitcher.backwards();
    assert.ok(pages[0].timesShown === 0);
    assert.ok(pages[0].timesHidden === 0);
});

QUnit.test("Test that given that pageswitcher has 2 pages when next and then backwards is triggered, pageswitcher hides current page",(assert) => {
    let pages = createPageSpiesArrayWithLength(2),
        pageSwitcher = new PageSwitcher(pages);
    pageSwitcher.next();
    pageSwitcher.backwards();
    assert.ok(pages[0].isShown());
    assert.ok(!pages[1].isShown());
});

QUnit.test("Test that given that pageswitcher has 2 pages when next and then backwards twice, pageswitcher hides current page and shows previous (next backwards is ignored.)",(assert) => {
    let pages = createPageSpiesArrayWithLength(2),
        pageSwitcher = new PageSwitcher(pages);
    pageSwitcher.next();
    pageSwitcher.backwards();
    pageSwitcher.backwards();
    assert.ok(pages[0].isShown());
    assert.ok(!pages[1].isShown());
});

QUnit.test("Test that given that pageswitcher has 3 pages when nexted twice and then backwards is triggered, pageswitcher hides current page",(assert) => {
    let pages = createPageSpiesArrayWithLength(3),
        pageSwitcher = new PageSwitcher(pages);
    pageSwitcher.next();
    pageSwitcher.next();
    pageSwitcher.backwards();
    assert.ok(!pages[0].isShown());
    assert.ok(pages[1].isShown());
    assert.ok(!pages[2].isShown());
});

QUnit.test("Test that given that pageswitcher has 3 pages when nexted twice and then backward twice, pageswitcher hides current page",(assert) => {
    let pages = createPageSpiesArrayWithLength(3),
        pageSwitcher = new PageSwitcher(pages);
    pageSwitcher.next();
    pageSwitcher.next();
    pageSwitcher.backwards();
    pageSwitcher.backwards();
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
