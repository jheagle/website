// Pages with the treeloom sandbox load this as a native ES module. window.treeloom comes from the site's own
// /browser/joshuaHome.js on /projects/, or the deferred classic /browser/vendor/treeloom.min.js on the treeloom page.
import { initTreeloomSandbox } from './treeloomSandbox.js?v=6970dd392a';
initTreeloomSandbox(document, window);