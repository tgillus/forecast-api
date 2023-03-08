import { Logger } from '../../infrastructure/logger/logger.js';
export class Probe {
  logger;
  constructor(logger) {
    this.logger = logger;
  }
  requestReceived() {
    this.logger.info('request received');
  }
  static from(context) {
    return new Probe(Logger.from(context));
  }
}
//# sourceMappingURL=probe.js.map
