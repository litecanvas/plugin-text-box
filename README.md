# Text Box plugin for litecanvas

Text boxes (dialogs, multi lines text, etc) for [litecanvas](https://github.com/litecanvas/engine) games.

## Install

**NPM**: `npm i @litecanvas/plugin-text-box`

**CDN**: `https://unpkg.com/@litecanvas/plugin-text-box/dist/dist.js`

## Usage

```js
import litecanvas from "litecanvas"
import pluginTextBox from "@litecanvas/plugin-text-box"

let message, box

litecanvas({
  loop: { init, update, update },
})

// load the plugin
use(pluginTextBox, {
  // default configuration
  color: 3,
  padding: 10,
  lineHeight: 1.2,
})

function init() {
  // The dimensions of our text box
  box = {
    x: 150,
    y: 80,
    w: W - 300,
    h: 160,
    textColor: 3,
  }

  message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat et itaque fuga sint, reiciendis natus sunt cumque accusamus voluptates maxime eaque labore dolorem vel quam odit similique. Dolorum numquam facilis, ex ad, in ullam porro unde excepturi, reiciendis quam voluptate amet sunt libero!"
}

function draw() {
  cls(0)

  textsize(20)
  textbox(box.x, box.y, box.w, box.h, message, box.textColor)

  // textbox() just wrap a text inside of a rectangle area, does not draw any window
  // the lines below draw a window for the textbox
  linewidth(5)
  rect(box.x, box.y, box.w, box.h, 3)
}
```

Play with this demo in the [litecanvas playground](https://litecanvas.js.org?c=eJx9U01v1EAMvedXuL1sIqWbLdUitGgRHxW0UoEDlTjPJt7EZTKTZjxNCtr%2FjmeSllIJLsnEfvP8bL8UBTCODDs7Qqd9TQYqbG1SFNAwd25TFDVx43fL0raFJsZSmTvligl8Ei6fyOXkTyrNkmTvTclkDZAhTjP4lQBoq6pvZU8dp4sHbm%2B6H3Wkfvtv7qIix%2FGxvHGLHNIeXQbbN5EVgPaQHsUQN70dYPFRkcYK2MaS4GLNRcR6h%2BnEfi3k7%2B2YgXQaYdzgPIEkQotpMmEwDpnJ1O5ZfNmpqpI4bGG9ep7TZPACqW5Y0qfL9fN8hTsfbnLvUXKHTB5JRFyLkIpaNE4G6MDuwfr%2BcUuCCZK2c%2FPjBk7Xqzye7zfwaj4OG%2Fh%2BeX59ASdwtppjjUBfzufA9sFq22%2FgLEQOoecWnVM1wjZCjq9sjy1Q53wLVcCCIwbVIkMpwrBkZBGmKurIURkGgbLEJXwm453MUpWoGAROrG49wt7XSjgM59CjXEAjOwWjWNDOG6H1bcCpsvROtRK9s9p3rBgdtGqUmQBGJq12Im5SJRrvUMOtVy3YShQ6akmTwJZwHgAi3wRiye9VKSmXA46iOxd3gtdaEp3tewveVFJhLLGTxugvlfH6o5xpClGzph329ug4OTxxfdWrYXZ9qV26CssNNr36%2Bu788sunTJilgnkdph5W4egnpi8ibPZHGjwy5mHXy%2FvpNUyvJn9Y1PT9uMosSZ46TOrfeMcw9KoDNfmHxFPSolhKiYSSlam1NNOjymWYMmVjOYoHZe5hIFPZYSYVUwZLO9ihlp9sAs0Q2Is5AmIuHX52wQ5UcZOuQ1eh2H9bOstkgL8BXyt8Bw%3D%3D).
