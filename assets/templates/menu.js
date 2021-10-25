import navigation from './components/nav.js'
import unorderedList from './components/unorderedList.js'
import listItem from './components/listItem.js'
import span from './components/span.js'
import anchor from './components/anchor.js'

/**
 * Generates a menu with the provided index as the currently selected item.
 * @param {number} currentIndex
 * @returns {DomItem}
 */
const menu = (currentIndex = 1) => {
  const menuItems = [
    listItem([span()], 'menu-btn sml med'),
    listItem([anchor('#intro', [], '', { innerText: 'Hello' })], 'third-menu'),
    listItem([anchor('#profile', [], '', { innerText: 'Meet Me' })], 'third-menu lrg'),
    listItem([anchor('#work', [], '', { innerText: 'See My Work' })], 'two-third-menu'),
    listItem([anchor('#profile', [], '', { innerText: 'Meet Me' })], 'third-menu sml med'),
    listItem([anchor('#rates', [], '', { innerText: 'Price Your Project' })], 'two-third-menu'),
    listItem([anchor('#contact', [], '', { innerText: 'Contact Me' })], 'full-menu'),
  ]
  menuItems[currentIndex].attributes.className += 'current'
  return navigation(
    [
      unorderedList(
        menuItems,
        'menu hover'
      )
    ]
  )
}
export default menu
