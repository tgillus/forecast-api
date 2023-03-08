export class Response {
  produce = (result) =>
    result.caseOf({
      Left: (error) => ({
        statusCode: 500,
        body: JSON.stringify(error),
      }),
      Right: (location) => ({
        statusCode: 200,
        body: JSON.stringify(location),
      }),
    });
}
//# sourceMappingURL=response.js.map
