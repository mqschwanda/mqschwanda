/* eslint-disable max-len */

import { shellExec, log, bashScripts } from './helpers';

/*
  START DEV SERVER
*/
log.header('starting dev server');
shellExec(bashScripts.dev).then(log.success).catch(log.error);
