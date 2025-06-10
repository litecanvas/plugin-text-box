import "litecanvas"

/**
 *
 * @param {LitecanvasInstance} engine
 * @param {object} config
 * @returns any
 */
export default function plugin(engine, config = {}) {
  const defaults = {
    /** @type {number} */
    color: config.color || 3,
    /** @type {number} */
    padding: config.padding || 10,
    /** @type {number} */
    lineHeight: config.lineHeight || 1.2,
    /** @type {boolean} */
    debug: false,
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param {string} message
   * @param {typeof defaults} [args]
   */
  function textbox(x, y, width, height, message, args = {}) {
    const words = message.split(" ")
    if (words.length === 0) return

    // Backward compatibility with v0.0.1
    if (typeof args !== "object") {
      args = { color: args }
    }

    args = Object.assign(defaults, args)

    if (args.debug) {
      engine.push()
      engine.linewidth(1)
      engine.rect(x, y, width, height, 3)
    }

    const padding = args.padding
    const lineHeight = args.lineHeight * _textmetrics("Aqçp").height

    x += padding
    y += padding
    width -= padding * 2
    height -= padding * 2

    const lines = _wrapText(message, width)
    const limit = y + height

    if (args.debug) {
      engine.rect(x, y, width, height, 4)
    }

    for (let i = 0; i < lines.length; i++) {
      if (y + lineHeight > limit) break
      if (args.debug) {
        engine.rect(x, y, width, lineHeight, 5)
      }
      engine.text(x, y, lines[i], args.color)
      y += lineHeight
      if (args.debug) {
        debugger
      }
    }

    if (args.debug) {
      engine.pop()
    }
  }

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

  function _textmetrics(text) {
    const _ctx = engine.ctx()
    const _fontFamily = engine.stat(11)
    const _fontSize = ~~engine.stat(10)
    _ctx.font = `${_fontSize}px ${_fontFamily}`
    const metrics = _ctx.measureText(text)
    metrics.height =
      metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
    return metrics
  }

  return { textbox }
}
