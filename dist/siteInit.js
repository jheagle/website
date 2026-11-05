// The homepage loads this as a native ES module (<script type='module' src='/dist/siteInit.js'>), after the classic
// title-switcher script (/browser/vendor/titleSwitcher.min.js), which defines window.TitleSwitcher.
import { initSiteNav } from './siteNav.js';
import { startRoleTitles } from './roleTitles.js';
initSiteNav(document, window);
startRoleTitles(document, window);