const router = require("./vehicle");
const routes = router.stack
  .filter(layer => layer.route)
  .map(layer => layer.route.path);

describe("Router", () => {
  it("contains the save route", () => {
    expect(routes).toContain("/makes");
    expect(routes).toContain("/models/:make");
    expect(routes).toContain("/models/:make/:year");
  });
});
