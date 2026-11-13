// Pages with the treeloom-matrix sandbox load this as a native ES module. window.treeloomMatrix and window.treeloom come from the
// site's own /browser/joshuaHome.js on /projects/, or the deferred classic /browser/vendor/treeloom.min.js and
// treeloomMatrix.min.js on the treeloom-matrix page.
import { initTreeloomMatrixSandbox } from './treeloomMatrixSandbox.js'

initTreeloomMatrixSandbox(document, window)
