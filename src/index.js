import "litecanvas"

/*! Text Box plugin for litecanvas v0.0.1 by Luiz Bills | MIT Licensed */
window.pluginTextBox = plugin

/**
 *
 * @param {LitecanvasInstance} engine
 * @returns any
 */
export default function plugin(engine) {
  let _fontSize = 32,
    _fontFamily = "sans-serif",
    _core_textsize = engine.textsize,
    _core_textfont = engine.textsize

  engine.setvar("textsize", (value) => {
    _fontSize = value
    _core_textsize(value)
  })

  engine.setvar("textfont", (value) => {
    _fontFamily = value
    _core_textfont(value)
  })

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param {string} message
   * @param {number} color
   */
  function textbox(x, y, width, height, message, color = 3) {
    const words = message.split(" ")
    if (words.length === 0) return

    if (textbox.debug) {
      engine.push()
      engine.linewidth(1)
      engine.rect(x, y, width, height, 3)
    }

    const padding = ~~textbox.padding
    const lineHeight =
      (parseFloat(textbox.lineHeight) || 1.2) * _textmetrics("Aqçp").height

    x += padding
    y += padding
    width -= padding * 2
    height -= padding * 2

    const lines = _wrapText(message, width)
    const limit = y + height

    if (textbox.debug) {
      engine.rect(x, y, width, height, 4)
    }

    for (let i = 0; i < lines.length; i++) {
      if (y + lineHeight > limit) break
      if (textbox.debug) {
        engine.rect(x, y, width, lineHeight, 5)
      }
      engine.text(x, y, lines[i], color)
      y += lineHeight
      if (textbox.debug) {
        debugger
      }
    }

    if (textbox.debug) {
      engine.pop()
    }
  }

  // settings
  /** @type {number} */
  textbox.padding = 10
  /** @type {number} */
  textbox.lineHeight = 1.2
  /** @type {boolean} */
  textbox.debug = false

  /**
   * @param {string} textMessage
   * @param {number} maxWidth
   * @returns {string[]}
   */
  function _wrapText(textMessage, maxWidth) {
    const words = textMessage.split(" ")
    const lines = []
    let line = ""

    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      const linewidth = _textmetrics(line + word).width
      if (linewidth < maxWidth) {
        line += word + " "
      } else {
        lines.push(line.trim())
        line = word + " "
      }
    }

    if (line) {
      lines.push(line.trim())
    }

    return lines
  }

  function _textmetrics(text, size = _fontSize) {
    // prettier-ignore
    const _ctx = ctx()
    _ctx.font = `${size}px ${_fontFamily}`
    const metrics = _ctx.measureText(text)
    metrics.height =
      metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
    return metrics
  }

  return { textbox }
}
