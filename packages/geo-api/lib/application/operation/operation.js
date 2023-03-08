import { EitherAsync } from 'purifree-ts';
import { Handler } from './handler/handler.js';
import { Schema } from './validation/schema.js';
export class Operation {
  schema;
  handler;
  constructor(schema, handler) {
    this.schema = schema;
    this.handler = handler;
  }
  exec = ({ parameters }) => {
    const result = this.schema.validate(parameters);
    return EitherAsync.liftEither(result).chain(this.handler.exec);
  };
  static from(config) {
    return new Operation(new Schema(), Handler.from(config));
  }
}
//# sourceMappingURL=operation.js.map
