// Pages with the matrix-dom sandbox load this as a native ES module. window.matrixDom and window.jsonDom come from the
// site's own /browser/joshuaHome.js on /projects/, or the deferred classic /browser/vendor/jsonDom.min.js and
// matrixDom.min.js on the matrix-dom page.
import { initMatrixDomSandbox } from './matrixDomSandbox.js?v=38eaa197d7';
initMatrixDomSandbox(document, window);