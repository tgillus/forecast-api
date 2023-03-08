import { EitherAsync } from 'purifree-ts';
import { Http } from '../../vendor/http/http.js';
export class GeoGateway {
  http;
  api;
  key;
  country;
  constructor(http, api, key, country) {
    this.http = http;
    this.api = api;
    this.key = key;
    this.country = country;
  }
  locationByZip = (zip) =>
    EitherAsync(() =>
      this.http.get(`${this.api}/v1/search/autocomplete`, {
        headers: {
          Authorization: this.key,
        },
        searchParams: {
          query: zip,
          country: this.country,
        },
      })
    );
  static from({ geo: { api, country, key } }) {
    return new GeoGateway(new Http(), api, key, country);
  }
}
//# sourceMappingURL=geo-gateway.js.map
