// Pages with the json-dom sandbox load this as a native ES module. window.jsonDom comes from the site's own
// /browser/joshuaHome.js on /projects/, or the deferred classic /browser/vendor/jsonDom.min.js on the json-dom page.
import { initJsonDomSandbox } from './jsonDomSandbox.js';
initJsonDomSandbox(document, window);