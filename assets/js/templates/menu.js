import navigation from './components/nav.js'
import unorderedList from './components/unorderedList.js'
import listItem from './components/listItem.js'
import span from './components/span.js'
import anchor from './components/anchor.js'
import header from './components/header.js'
import text from './components/text.js'

/**
 * Generates a menu with the provided index as the currently selected item.
 * @param {number} currentIndex
 * @returns {DomItem}
 */
const menu = (currentIndex = 1) => {
  const menuItems = [
    listItem([span()], 'menu-btn sml med'),
    listItem([anchor('#intro', [text('Hello')])], 'third-menu'),
    listItem([anchor('#profile', [text('Meet Me')])], 'third-menu lrg'),
    listItem([anchor('#work', [text('See My Work')])], 'two-third-menu'),
    listItem([anchor('#profile', [text('Meet Me')])], 'third-menu sml med'),
    listItem([anchor('#rates', [text('Price Your Project')])], 'two-third-menu'),
    listItem([anchor('#contact', [text('Contact Me')])], 'full-menu'),
  ]
  menuItems[currentIndex].attributes.className += 'current'
  return header(
    [
      navigation(
        [
          unorderedList(
            menuItems,
            'menu hover'
          )
        ]
      )
    ],
    'hover'
  )
}
export default menu
