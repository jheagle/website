/**
 * The typing effect on the homepage's role line, run by title-switcher (https://www.npmjs.com/package/title-switcher).
 *
 * The page's real text stays put: the role line's static "Full-Stack Engineer" is what screen readers, applicant
 * tracking systems and visitors without JavaScript get. The lines to type live in a `<template>`, which browsers
 * don't render and readers don't read. This module copies them into an `aria-hidden` span, tucks the static text
 * away visually (`data-animated` on the line switches its `group-data-animated:sr-only` class on), and starts the
 * typing. When the visitor's system asks for reduced motion, nothing changes at all.
 * @module roleTitles
 */

/** Typing speed (ms per character) and the cursor's blink interval (ms), passed to title-switcher. */
export const timing = {
  delayEffect: 70,
  delaySwitch: 350
};

/**
 * Start the typing effect, unless something it needs is missing or the visitor prefers reduced motion.
 * @param {Document} document
 * @param {Window} window
 * @param {Function} [TitleSwitcher=window.TitleSwitcher] The title-switcher class (swappable in tests).
 * @returns {Object|null} The running TitleSwitcher, or null when it didn't start.
 */
export const startRoleTitles = (document, window, TitleSwitcher = window.TitleSwitcher) => {
  const role = document.getElementById('role');
  const template = document.getElementById('role-titles');
  if (!role || !template || typeof TitleSwitcher !== 'function') return null;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
  const live = document.createElement('span');
  live.id = 'role-titles-live';
  live.setAttribute('aria-hidden', 'true');
  live.appendChild(template.content.cloneNode(true));
  role.appendChild(live);
  role.setAttribute('data-animated', '');
  const switcher = new TitleSwitcher('#role-titles-live');
  switcher.startTitles(timing);
  return switcher;
};