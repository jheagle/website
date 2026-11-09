/**
 * The topic filter on /books/: one toggle per tag. A book shows unless one of its tags is switched off. Tags listed in
 * the filter's data-hidden-by-default start off, so those books are hidden but one tap away. The choice is kept in the
 * address (`?show=` for default-hidden tags switched on, `?hide=` for others switched off), so a link can share it.
 *
 * Hiding is presentation only: every book is in the page's HTML. Without JavaScript the filter stays hidden and every
 * book shows.
 * @module booksFilter
 */

/**
 * Which tags are off, from the defaults and the address.
 * @param {string[]} hiddenByDefault
 * @param {URLSearchParams} params
 * @returns {Set<string>}
 */
export const tagsOff = (hiddenByDefault, params) => {
  const list = name => (params.get(name) || '').split(',').map(tag => tag.trim()).filter(Boolean)
  const shown = list('show')
  return new Set([...hiddenByDefault.filter(tag => !shown.includes(tag)), ...list('hide')])
}

/**
 * The address's query for this state: only what differs from the defaults.
 * @param {string[]} hiddenByDefault
 * @param {Set<string>} off
 * @returns {string} Starting with '?', or '' for the defaults.
 */
export const queryFor = (hiddenByDefault, off) => {
  const params = new URLSearchParams()
  const show = hiddenByDefault.filter(tag => !off.has(tag))
  const hide = [...off].filter(tag => !hiddenByDefault.includes(tag)).sort()
  if (show.length) params.set('show', show.join(','))
  if (hide.length) params.set('hide', hide.join(','))
  const text = params.toString().replace(/%2C/g, ',')
  return text ? `?${text}` : ''
}

/**
 * Wire up the filter. Does nothing on a page without one.
 * @param {Document} document
 * @param {Window} window
 * @returns {{toggle: function(string): void, off: function(): Set<string>}|null}
 */
export const initBooksFilter = (document, window) => {
  const filter = document.getElementById('book-filters')
  if (!filter) return null
  const hiddenByDefault = (filter.getAttribute('data-hidden-by-default') || '').split(',').filter(Boolean)
  const buttons = [...filter.querySelectorAll('[data-tag]')]
  const books = [...document.querySelectorAll('li[data-tags]')]
  const status = document.getElementById('book-filter-status')
  let off = tagsOff(hiddenByDefault, new URLSearchParams(window.location.search))

  const apply = () => {
    for (const button of buttons) button.setAttribute('aria-pressed', String(!off.has(button.getAttribute('data-tag'))))
    let hidden = 0
    for (const book of books) {
      const tags = book.getAttribute('data-tags').split(',').filter(Boolean)
      const hide = tags.some(tag => off.has(tag))
      book.hidden = hide
      if (hide) hidden++
    }
    // A year with every book hidden hides its heading too
    for (const section of document.querySelectorAll('main section')) {
      section.hidden = ![...section.querySelectorAll('li[data-tags]')].some(book => !book.hidden)
    }
    status.textContent = hidden
      ? `Showing ${books.length - hidden} of ${books.length} books. ${hidden} hidden by topic: ${[...off].sort().join(', ')}.`
      : `Showing all ${books.length} books.`
  }

  const toggle = tag => {
    off = new Set(off)
    if (off.has(tag)) off.delete(tag)
    else off.add(tag)
    window.history.replaceState(null, '', `${window.location.pathname}${queryFor(hiddenByDefault, off)}${window.location.hash}`)
    apply()
  }

  for (const button of buttons) button.addEventListener('click', () => toggle(button.getAttribute('data-tag')))
  filter.hidden = false
  apply()
  return { toggle, off: () => off }
}
