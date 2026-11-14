// Pages with the treeloom-components sandbox load this as a native ES module. window.treeloomComponents and
// window.treeloom come from the site's own /browser/joshuaHome.js on /projects/, or the deferred classic
// /browser/vendor/treeloom.min.js and treeloomComponents.min.js on the treeloom-components page.
import { initTreeloomComponentsSandbox } from './treeloomComponentsSandbox.js?v=3d6b276478';
initTreeloomComponentsSandbox(document, window);