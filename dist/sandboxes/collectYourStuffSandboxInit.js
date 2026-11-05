// Pages with the collect-your-stuff sandbox load this as a native ES module, after the deferred classic
// /browser/vendor/collectYourStuff.min.js (which defines window.collectYourStuff).
import { initCollectYourStuffSandbox } from './collectYourStuffSandbox.js';
initCollectYourStuffSandbox(document, window);