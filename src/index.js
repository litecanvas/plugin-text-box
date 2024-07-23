/*! Text Box plugin for litecanvas v0.0.1 by Luiz Bills | MIT Licensed */
window.pluginTextBox = plugin

/**
 *
 * @param {LitecanvasInstance} engine
 * @returns any
 */
export default function plugin(engine) {
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
      (parseFloat(textbox.lineHeight) || 1.2) *
      engine.textmetrics("Aqçp").height

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
      const linewidth = engine.textmetrics(line + word).width
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

  return { textbox }
}
