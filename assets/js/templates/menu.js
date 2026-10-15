/* global jsonDomComponents */
const { nav: navigation, unorderedList, listItem, span, anchor, header, text } = jsonDomComponents

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
    listItem([anchor('#experience', [text('Experience')])], 'third-menu'),
    listItem([anchor('#work', [text('See My Work')])], 'two-third-menu'),
    listItem([anchor('#profile', [text('Meet Me')])], 'third-menu sml med'),
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
