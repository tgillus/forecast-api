import got from 'got';
export class Http {
  async get(url, options) {
    return await got.get(url, options).json();
  }
}
//# sourceMappingURL=http.js.map
