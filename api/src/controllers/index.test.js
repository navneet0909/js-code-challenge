const { ping } = require("./index");

let res;

describe("Root Controller", () => {
  beforeEach(() => {
    res = {
      json: jest.fn()
    };
  });

  it("responds to ping", () => {
    const result = { message: "pong" };

    ping({}, res);
    expect(res.json).toBeCalled();
    expect(res.json.mock.calls[0][0]).toEqual(result);
  });
});
