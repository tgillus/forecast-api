export class RequestContext {
  functionName;
  functionVersion;
  sourceIp;
  constructor(functionName, functionVersion, sourceIp) {
    this.functionName = functionName;
    this.functionVersion = functionVersion;
    this.sourceIp = sourceIp;
  }
  static from(
    {
      requestContext: {
        identity: { sourceIp },
      },
    },
    { functionName, functionVersion }
  ) {
    return new RequestContext(functionName, functionVersion, sourceIp);
  }
}
//# sourceMappingURL=request-context.js.map
