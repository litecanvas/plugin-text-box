# Text Box plugin for litecanvas

Text boxes (dialogs, multi lines text, etc) for [litecanvas](https://github.com/litecanvas/engine) games.

## Install

**NPM**: `npm i @litecanvas/plugin-text-box`

**CDN**: `https://unpkg.com/@litecanvas/plugin-text-box/dist/dist.js`

## Usage

```js
import litecanvas from "litecanvas"
import pluginTextBox from "@litecanvas/plugin-text-box"

litecanvas({
  loop: { init, update, update },
})

use(pluginTextBox) // load the plugin

function init() {
  // The dimensions of our text box
  box = {
    x: 150,
    y: 80,
    w: WIDTH - 300,
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

Play with this demo in the [litecanvas playground]().
