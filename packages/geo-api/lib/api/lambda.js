import { Probe } from '../application/probe/probe.js';
import { Config } from '../infrastructure/config/config.js';
import { env } from '../infrastructure/env/env.js';
import { Api } from './api.js';
import { RequestContext } from './request/request-context.js';
import { Request } from './request/request.js';
export const handler = async (event, context) => {
  const api = Api.from(
    Probe.from(RequestContext.from(event, context)),
    new Config(env)
  );
  return await api.handler(new Request(event));
};
//# sourceMappingURL=lambda.js.map
