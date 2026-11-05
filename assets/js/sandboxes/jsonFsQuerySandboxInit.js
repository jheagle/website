// Pages with the json-fs-query sandbox load this as a native ES module, after the deferred classic
// /browser/vendor/jsonFsQuery.min.js (which defines window.jsonFsQuery).
import { initJsonFsQuerySandbox } from './jsonFsQuerySandbox.js'

initJsonFsQuerySandbox(document, window)
