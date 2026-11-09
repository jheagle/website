// Pages with the matrix-dom sandbox load this as a native ES module. window.matrixDom comes from the site's own
// /browser/joshuaHome.js on /projects/, or the deferred classic /browser/vendor/matrixDom.min.js on the matrix-dom page.
import { initMatrixDomSandbox } from './matrixDomSandbox.js?v=af744a602c';
initMatrixDomSandbox(document, window);