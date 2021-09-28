import navigation from 'components/nav'
import unorderedList from 'components/unorderedList'
import listItem from 'components/listItem'
import span from 'components/span'
import anchor from 'components/anchor'

const menu = (currentIndex) => {
  const menuItems = [
    listItem([span()], 'menu-btn sml med'),
    listItem([anchor('#intro', [], { textContent: 'Hello' })], 'third-menu'),
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
< nav >
< ul
className = 'menu hover' >
  < li
className = 'menu-btn sml med' >
  < span > < /span>
</li>
<li className="current third-menu">
  <a href="#intro">Hello</a>
</li>
<li className="third-menu lrg">
  <a href="#profile">Meet Me</a>
</li>
<li className="two-third-menu">
  <a href="#work">See My Work</a>
</li>
<li className="third-menu sml med">
  <a href="#profile">Meet Me</a>
</li>
<li className="two-third-menu">
  <a href="#rates">Price Your Project</a>
</li>
<li className="full-menu">
  <a href="#contact">Contact Me</a>
</li>
</ul>
</nav>