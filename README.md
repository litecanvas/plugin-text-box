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

  // Settings for textbox()
  // textbox.padding = 50
  // textbox.lineHeight = 1.5
  // textbox.debug = true

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

Play with this demo in the [litecanvas playground](https://litecanvas.js.org?c=eJx9U01v1DAQvedXTHvZREqTLdUitGgRHxW0UoEDlTh749ndKY6dxuMmBfW%2FM3ZCKT1wSZyZ5zdvZl7qGhhHhq0boTNhTxY0ti4zxNgoe6d8XmTZLtiGyVkgS5wX8CsDME7pb01PHeeLA3Pn13UdbPdjXzWurd%2F%2BJagn3pNY50Tq1Jo8p0d14xcl5D36AjZvEisA7SA%2FSiE%2B9G6AxUdFBjWwSyXBp5qLhA0e84n9Wsjfu7GAup5gfMC5oSxB66nR2KdHZrJ7%2FyxedUpricMGVsvnOUMWL5D2B5b0abV6nte4DfEm9wEl91DII0uIaxGiqUXrZYAe3A5c6B%2BHLpgoaTM3P67hdLUs0%2Fl%2BDa%2Fm47CG75fn1xdwAmfLOXYQ6Mv5HNk%2BOOP6NZzFyEPsuUXv1R5hkyDHV67HFqjzoQUdseCJQbXI0IgwbBhZhClNHXlq4iBQlljBZ7LByyxVg4pB4MTqNiDswl4Jh%2BUSepQLaGWnYBUL2gcrtKGNONU0watWonfOhI4Vo4dWjTITwMRk1FbETapE4x0auA2qBadFoaeWDAmsgvMIEPk2Ekt%2BpxpJ%2BRJwFN2luBOCMZLoXN87CFZLhbHBThqjf1Sm649ypikkzYa22Luj4%2Bzhiet1r4bZ9Y3x%2BTIuN9r06uu788svnwphlgr2dZx6XIWnn5i%2FSLDZH3n0yFjGXVf302uYXofyz6Km78dVFln21GFS%2FyZ4hqFXHajJPySekhbFUkokNKzs3kgzPapShilTto6TeFD2Hgay2g0zqZgyWtrDFo38ZBNohsBOzBERc%2Bn4swt2IM2HfBW7isX%2B29JZIQP8DVowakU%3D).
