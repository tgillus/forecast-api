export class Request {
  event;
  constructor(event) {
    this.event = event;
  }
  get parameters() {
    return {
      ...this.event.queryStringParameters,
    };
  }
}
//# sourceMappingURL=request.js.map
