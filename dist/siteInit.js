// The homepage loads this as a native ES module (<script type='module' src='/dist/siteInit.js'>), after the classic
// title-switcher script (/browser/vendor/titleSwitcher.min.js), which defines window.TitleSwitcher.
import { initSiteNav } from './siteNav.js?v=f4fa9d6713';
import { startRoleTitles } from './roleTitles.js?v=099c4e48e5';
initSiteNav(document, window);
startRoleTitles(document, window);