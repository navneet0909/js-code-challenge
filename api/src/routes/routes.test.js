const router = require(".");
const routes = router.stack
  .filter(layer => layer.route)
  .map(layer => layer.route.path);

describe("Router", () => {
  it("contains the ping route", () => {
    expect(routes).toContain("/");
  });
});
