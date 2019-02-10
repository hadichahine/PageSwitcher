class PageSwitcher {
    
    constructor(pages){
        this.pages = pages;
        this.currentPageIndex = 0;
    }

    next(){
        if(this.hasMoreThanOnePage() && this.reachedFinalPage()){
            this.pages[this.currentPageIndex].hide();
            this.pages[this.currentPageIndex + 1].show();
            this.currentPageIndex++;
        }
    }

    hasMoreThanOnePage(){
        return this.pages.length > 1;
    }

    reachedFinalPage(){
        return this.currentPageIndex !== this.pages.length - 1;
    }

}

class PageSpy {

    show(){
        this.timesShown === undefined ? this.timesShown = 1 : this.timesShown++;
        this.shown = true;
    }

    hide(){
        this.timesHidden === undefined ? this.timesHidden = 1 : this.timesHidden++;
        this.shown = false;
    }

    isShown(){
        return this.shown;
    }

}

QUnit.test("Test that first page is kept the same when it's the only one there.",(assert)=>{
    let pages = createPageSpiesArrayWithLength(1),
        pageSwitcher = new PageSwitcher(pages);
    pages[0].show();
    pageSwitcher.next();
    assert.ok(pages[0].timesShown === 1);
});

QUnit.test("Test that first page is set off and second page is set on when next is triggered.",(assert)=>{
    let pages = createPageSpiesArrayWithLength(2),
        pageSwitcher = new PageSwitcher(pages);
    pageSwitcher.next();
    assert.ok(!pages[0].isShown());
    assert.ok(pages[1].isShown());
});

QUnit.test("Test that when the switcher reaches end and next is triggered then the page switcher does nothing.",(assert)=>{
    let pages = createPageSpiesArrayWithLength(2),
        pageSwitcher = new PageSwitcher(pages);
    pageSwitcher.next();
    pageSwitcher.next();
    assert.ok(pages[0].timesHidden === 1);
    assert.ok(pages[1].timesShown === 1);
});

QUnit.test("Test that when switcher is moved 2 times on 3 pages then the first and second page are hidden and third page is shown.",(assert)=>{
    let pages = createPageSpiesArrayWithLength(3),
        pageSwitcher = new PageSwitcher(pages);
    pageSwitcher.next();
    pageSwitcher.next();
    assert.ok(!pages[0].isShown());
    assert.ok(!pages[1].isShown());
    assert.ok(pages[2].isShown());
});

QUnit.test("Test that when switcher is moved 3 times on 4 pages then the first, second, and third page are hidden and fourth page is shown.",(assert)=>{
    let pages = createPageSpiesArrayWithLength(4),
        pageSwitcher = new PageSwitcher(pages);
    pageSwitcher.next();
    pageSwitcher.next();
    pageSwitcher.next();
    assert.ok(!pages[0].isShown());
    assert.ok(!pages[1].isShown());
    assert.ok(!pages[2].isShown());
    assert.ok(pages[3].isShown());
});

function createPageSpiesArrayWithLength(length){
    let pageSpyArray = [];
    let i = 1;
    while(i++ <= length)
        pageSpyArray.push(new PageSpy());
    return pageSpyArray;
}