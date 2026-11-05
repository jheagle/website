/**
 * The homepage's section nav: pinned to the top by its classes, and made smarter here.
 *
 * - Hides while the visitor scrolls down and comes back when they scroll up (or tab into it), so it doesn't cover the
 *   page while reading.
 * - On phones it collapses behind the Menu button (the list's `data-closed` attribute; from `md` up the classes keep
 *   it a row whatever the attribute says).
 * - Marks the link of the section being read with `data-current` and `aria-current`.
 *
 * Without this script the nav is still a plain, pinned list of links: the Menu button stays `hidden` and the list
 * stays open.
 * @module siteNav
 */

/** Scroll movements smaller than this (in px) don't change whether the nav is shown, so tiny jitters don't flicker it. */
export const scrollTolerance = 8;

/**
 * Decide whether the nav should be hidden after a scroll.
 * @param {Object} state
 * @param {boolean} state.hidden Whether the nav is hidden now.
 * @param {number} state.lastY The scroll position at the previous decision.
 * @param {number} state.y The scroll position now.
 * @param {number} state.pinnedFrom The scroll position where the nav starts to stick to the top; above it the nav
 * is in its natural place under the header, so it always shows.
 * @param {boolean} state.menuOpen The phone menu is open: keep the nav showing.
 * @param {boolean} state.holding A nav link was just followed: keep the nav showing until that scroll ends.
 * @returns {boolean}
 */
export const nextHidden = ({
  hidden,
  lastY,
  y,
  pinnedFrom,
  menuOpen,
  holding
}) => {
  if (menuOpen || holding || y <= pinnedFrom) return false;
  const moved = y - lastY;
  if (Math.abs(moved) < scrollTolerance) return hidden;
  return moved > 0;
};

/**
 * Pick the section being read: the last one whose top has passed the reading line (a third of the way down the
 * viewport), or none above the first section.
 * @param {Array<{id: string, top: number}>} sections Each section's id and its top relative to the viewport, in page order.
 * @param {number} readingLine Distance from the top of the viewport, in px.
 * @returns {string|null}
 */
export const currentSection = (sections, readingLine) => {
  let current = null;
  for (const {
    id,
    top
  } of sections) {
    if (top <= readingLine) current = id;
  }
  return current;
};

/**
 * Wire up the nav.
 * @param {Document} document
 * @param {Window} window
 * @returns {{setMenuOpen: function(boolean): void, update: function(): void}|null} null when the page has no nav.
 */
export const initSiteNav = (document, window) => {
  const nav = document.getElementById('site-nav');
  const list = document.getElementById('site-nav-links');
  const toggle = document.getElementById('site-nav-toggle');
  const header = document.querySelector('body > header');
  if (!nav || !list || !toggle) return null;
  const links = [...list.querySelectorAll('a[href^="#"]')];
  const sections = links.map(link => document.getElementById(link.getAttribute('href').slice(1))).filter(Boolean);
  let menuOpen = false;
  let hidden = false;
  let holding = false;
  let lastY = window.scrollY;
  const setHidden = value => {
    hidden = value;
    if (hidden) nav.setAttribute('data-hidden', '');else nav.removeAttribute('data-hidden');
  };
  const setMenuOpen = open => {
    menuOpen = open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
    if (open) list.removeAttribute('data-closed');else list.setAttribute('data-closed', '');
    if (open) setHidden(false);
  };

  // The nav sticks once the page has scrolled past the header above it
  const pinnedFrom = () => header ? header.offsetTop + header.offsetHeight : 0;
  const markCurrent = () => {
    const readingLine = window.innerHeight / 3;
    const id = currentSection(sections.map(section => ({
      id: section.id,
      top: section.getBoundingClientRect().top
    })), readingLine);
    for (const link of links) {
      const isCurrent = link.getAttribute('href') === `#${id}`;
      if (isCurrent) {
        link.setAttribute('data-current', '');
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('data-current');
        link.removeAttribute('aria-current');
      }
    }
  };

  // At the top of the page the header already shows the name, so the bar's copy of it hides (data-at-top) until
  // the header scrolls away
  const markAtTop = y => {
    if (y <= pinnedFrom()) nav.setAttribute('data-at-top', '');else nav.removeAttribute('data-at-top');
  };
  const update = () => {
    const y = window.scrollY;
    markAtTop(y);
    setHidden(nextHidden({
      hidden,
      lastY,
      y,
      pinnedFrom: pinnedFrom(),
      menuOpen,
      holding
    }));
    lastY = y;
    markCurrent();
  };
  let frame = 0;
  window.addEventListener('scroll', () => {
    if (frame) return;
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      update();
    });
  }, {
    passive: true
  });

  // Following a nav link scrolls the page down, which would hide the nav; hold it until that scroll ends
  // (scrollend isn't in every browser yet, hence the timer as well).
  // Only a hold resets lastY: the jump itself shouldn't count as scrolling down. Any other scrollend must leave it
  // alone, because Chromium fires scroll and scrollend in the same task for a quick scroll, before the frame that
  // runs update(); resetting lastY there made every quick scroll look like no movement at all.
  let holdTimer = 0;
  const release = () => {
    if (!holding) return;
    holding = false;
    lastY = window.scrollY;
  };
  window.addEventListener('scrollend', release);
  list.addEventListener('click', event => {
    if (!event.target.closest('a')) return;
    holding = true;
    window.clearTimeout(holdTimer);
    holdTimer = window.setTimeout(release, 1000);
    setMenuOpen(false);
  });
  toggle.addEventListener('click', () => setMenuOpen(!menuOpen));
  nav.addEventListener('focusin', () => setHidden(false));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  // With the script running, the phone menu starts closed and the button appears
  toggle.removeAttribute('hidden');
  setMenuOpen(false);
  markAtTop(window.scrollY);
  markCurrent();
  return {
    setMenuOpen,
    update
  };
};