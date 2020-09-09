# page-switcher

page-switcher provides a state machine for dealing with switching pages on a website. The interface is abstract making it usable almost on everything that runs Javascript.
# Usage


```javascript
const { createCardSwitcher } = require('page-switcher')

const switcher = createCardSwitcher([
  {
    show(){
      console.log('page one shown')
    },
    hide(){
      console.log('page one hidden')
    }
  },
  {
    show(){
      console.log('page two shown')
    },
    hide(){
      console.log('page two hidden')
    }
  },
])

switcher.next()
switcher.backwards()
```
# License

MIT
