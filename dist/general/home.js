const siFunciona = require('si-funciona')
const home = () => {
  let attempted = 0
  const homeScrolling = () => {
    let lastId = ''
    const topMenu = document.getElementsByClassName('menu')[0]
    if (!topMenu) {
      // Add a bit of delay since it take some time to generate the menu.
      return siFunciona.delay(500).resolver.then(() => ++attempted > 10 ? console.error('Failed to get the top menu') || false : homeScrolling())
    }
    const menuItems = topMenu.querySelectorAll('a')
    let menuItemsTemp = Array.from(menuItems)
    menuItemsTemp.splice(3, 1)
    const scrollItems = menuItemsTemp.map(item => document.querySelector(item.getAttribute('href')))
    menuItemsTemp = null
    const adjustMain = href => {
      const position = href === 'intro' ? 'fixed' : 'absolute'
      document.getElementById('main').style.position = position
      return position
    }
    const smoothScroll = (target, duration = 200, callback = null) => {
      const offset = target.offsetTop
      let currentOffset = document.scrollingElement.scrollTop
      const direction = offset > currentOffset ? 1 : -1
      let currentTime = 0
      let difference = Math.floor(direction * (offset - currentOffset))
      const scrollTo = newTime => {
        if (currentTime !== 0) {
          currentOffset += direction * (difference * (newTime - currentTime) / duration)
          difference = Math.floor(direction * (offset - currentOffset))
          if (difference <= 0) {
            document.scrollingElement.scrollTop = offset
            if (target.id) {
              window.location.hash = target.id
            }
            if (callback) {
              return callback(target)
            }
            return offset
          }
          document.scrollingElement.scrollTop = currentOffset
        }
        currentTime = newTime
        return window.requestAnimationFrame(scrollTo)
      }
      window.requestAnimationFrame(scrollTo)
    }
    const downArrows = Array.from(document.getElementsByClassName('arrow-down'))
    const anchorLinks = Array.from(menuItems).concat(downArrows)
    anchorLinks.forEach(item => {
      item.addEventListener('click', e => {
        const href = item.getAttribute('href')
        smoothScroll(document.querySelector(href), 200, target => adjustMain(target.id))
        menuItems.forEach(mItem => mItem.parentElement.classList.remove('current'))
        item.parentElement.classList.add('current')
        e.preventDefault()
      })
    })
    window.addEventListener('scroll', e => {
      const fromTop = document.scrollingElement.scrollTop + 10
      let cur = scrollItems.filter(item => item.offsetTop < fromTop)
      cur = cur[cur.length - 1]
      const id = cur.id
      if (lastId !== id) {
        lastId = id
        adjustMain(id)
        menuItems.forEach(mItem => mItem.getAttribute('href') === `#${id}` ? mItem.parentElement.classList.add('current') : mItem.parentElement.classList.remove('current'))
      }
    })
    const headerElement = document.getElementsByTagName('header')[0]
    headerElement.addEventListener('click', e => {
      if (e.target.classList.contains('menu-btn')) {
        e.target.parentElement.classList.toggle('hover')
        return headerElement.classList.toggle('hover')
      }
      return false
    })
  }
  homeScrolling()
}
module.exports = home
