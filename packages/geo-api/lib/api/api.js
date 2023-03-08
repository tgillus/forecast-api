import { Operation } from '../application/operation/operation.js';
import { Response } from './response/response.js';
export class Api {
  operation;
  response;
  probe;
  constructor(operation, response, probe) {
    this.operation = operation;
    this.response = response;
    this.probe = probe;
  }
  handler = async (request) => {
    this.probe.requestReceived();
    return this.response.produce(await this.operation.exec(request));
  };
  static from(probe, config) {
    return new Api(Operation.from(config), new Response(), probe);
  }
}
//# sourceMappingURL=api.js.map
