/**
 * @jest-environment jsdom
 */
const { renderBooks, parseBooks } = require('../../scripts/books/books.cjs')
const { tagsOff, queryFor, initBooksFilter } = require('./booksFilter')

const csv = `Title,Author,Date,Finished,Tags
History One,A,2026-03-01,2026-03-02,history
Spicy One,B,2026-02-01,2026-02-02,"relationships, nsfw"
Spicy Two,C,2025-01-01,2025-01-02,nsfw
Plain,D,2026-01-01,2026-01-02,`

const load = (search = '') => {
  const html = renderBooks(parseBooks(csv).books)
  document.body.innerHTML = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1]
  window.history.replaceState(null, '', `/books/${search}`)
  return initBooksFilter(document, window)
}
const visible = () => [...document.querySelectorAll('li[data-tags]')].filter(book => !book.hidden).map(book => book.id)

describe('booksFilter', () => {
  test('tagsOff and queryFor round-trip the address', () => {
    expect([...tagsOff(['nsfw'], new URLSearchParams(''))]).toEqual(['nsfw'])
    expect([...tagsOff(['nsfw'], new URLSearchParams('?show=nsfw&hide=history'))]).toEqual(['history'])
    expect(queryFor(['nsfw'], new Set(['nsfw']))).toBe('')
    expect(queryFor(['nsfw'], new Set(['history']))).toBe('?show=nsfw&hide=history')
  })

  test('books with a default-hidden tag start hidden, and a year left empty hides its heading', () => {
    load()
    expect(document.getElementById('book-filters').hidden).toBe(false)
    expect(visible()).toEqual(['history-one', 'plain'])
    expect(document.getElementById('book-filter-status').textContent).toBe('Showing 2 of 4 books. 2 hidden by topic: nsfw, polyamory, sensitive.')
    const sections = [...document.querySelectorAll('main section')]
    expect(sections.map(section => [section.querySelector('h2').textContent, section.hidden])).toEqual([['2026', false], ['2025', true]])
    expect(document.querySelector("[data-tag='nsfw']").getAttribute('aria-pressed')).toBe('false')
  })

  test('one tap shows them, and the address remembers it', () => {
    load()
    document.querySelector("[data-tag='nsfw']").click()
    expect(visible()).toEqual(['history-one', 'spicy-one', 'plain', 'spicy-two'])
    expect(window.location.search).toBe('?show=nsfw')
    expect(document.getElementById('book-filter-status').textContent).toBe('Showing all 4 books.')
    document.querySelector("[data-tag='history']").click()
    expect(visible()).toEqual(['spicy-one', 'plain', 'spicy-two'])
    expect(window.location.search).toBe('?show=nsfw&hide=history')
  })

  test('a shared link opens in its state', () => {
    load('?show=nsfw')
    expect(visible()).toHaveLength(4)
  })

  test('does nothing on a page without the filter', () => {
    document.body.innerHTML = '<p>No filter</p>'
    expect(initBooksFilter(document, window)).toBeNull()
  })
})
