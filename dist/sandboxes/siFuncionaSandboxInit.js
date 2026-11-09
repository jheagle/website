// Pages with the si-funciona sandbox load this as a native ES module, after the deferred classic
// /browser/vendor/siFunciona.min.js (which defines window.siFunciona).
import { initSiFuncionaSandbox } from './siFuncionaSandbox.js?v=1fe6b6618a';
initSiFuncionaSandbox(document, window);