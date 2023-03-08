import { Either } from 'purifree-ts';
import { z } from 'zod';
export class Schema {
  validate = (params) => {
    return Either.encase(() => Location.parse(params));
  };
}
const Location = z.object({
  zip: z.string().trim(),
});
//# sourceMappingURL=schema.js.map
