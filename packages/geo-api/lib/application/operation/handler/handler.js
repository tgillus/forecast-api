import { GeoGateway } from '../../../infrastructure/geo/geo-gateway.js';
export class Handler {
  geoGateway;
  constructor(geoGateway) {
    this.geoGateway = geoGateway;
  }
  exec = ({ zip }) => {
    return this.geoGateway.locationByZip(zip);
  };
  static from(config) {
    return new Handler(GeoGateway.from(config));
  }
}
//# sourceMappingURL=handler.js.map
