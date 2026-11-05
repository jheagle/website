// Pages with the pseudo-dom sandbox load this as a native ES module, after the deferred classic
// /browser/vendor/pseudoDom.min.js (which defines window.pseudoDom).
import { initPseudoDomSandbox } from './pseudoDomSandbox.js?v=923f27e203';
initPseudoDomSandbox(document, window);