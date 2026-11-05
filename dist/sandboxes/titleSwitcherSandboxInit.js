// /projects/ loads this as a native ES module, after the deferred classic /browser/vendor/titleSwitcher.min.js.
import { initTitleSwitcherSandbox } from './titleSwitcherSandbox.js';
initTitleSwitcherSandbox(document, window);