import log from 'lambda-log';
export class Logger {
  log;
  constructor(log) {
    this.log = log;
  }
  info(message, meta) {
    this.log.info(message, meta);
  }
  error(error, meta) {
    this.log.error(error, meta);
  }
  static from(context) {
    return new Logger(new log.LambdaLog({ meta: { ...context } }));
  }
}
//# sourceMappingURL=logger.js.map
