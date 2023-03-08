export class Config {
  geo;
  constructor(env) {
    this.geo = {
      api: env.RADAR_API_HOST,
      country: env.RADAR_API_COUNTRY,
      key: env.RADAR_API_KEY,
    };
  }
}
//# sourceMappingURL=config.js.map
