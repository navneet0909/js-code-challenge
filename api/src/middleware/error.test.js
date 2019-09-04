const { errorHandler } = require("./error");

let res;
let _status;
let next;

describe("Error Middleware", () => {
  beforeEach(() => {
    // mock out response object with spys
    _status = jest.fn();
    res = {
      status: _status,
      json: jest.fn()
    };
    _status.mockImplementation(() => res);

    next = jest.fn();
  });

  it("catches errors", () => {
    const err = new Error("Test Error");

    errorHandler(err, {}, res, next);
    expect(res.json.mock.calls[0][0]).toEqual({
      status: 500,
      error: "Test Error"
    });
  });

  it("caches error status", () => {
    const err = new Error("Not Found");
    err.status = 404;

    errorHandler(err, {}, res, next);
    expect(res.json.mock.calls[0][0]).toEqual({
      status: 404,
      error: "Not Found"
    });
  });

  it("skips if no error", () => {
    const err = undefined;

    errorHandler(err, {}, res, next);
    expect(res.json).not.toBeCalled();
  });

});
