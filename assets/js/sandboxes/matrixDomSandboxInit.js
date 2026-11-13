// Pages with the matrix-dom sandbox load this as a native ES module. window.treeloomMatrix and window.treeloom come from the
// site's own /browser/joshuaHome.js on /projects/, or the deferred classic /browser/vendor/treeloom.min.js and
// treeloomMatrix.min.js on the matrix-dom page.
import { initMatrixDomSandbox } from './matrixDomSandbox.js'

initMatrixDomSandbox(document, window)
