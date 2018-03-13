import { calculateExpires, daysToExpire } from "./../../src/utils/utils";
describe("utils", () => {
  describe("calculateExpires", () => {
    it("should calculate correct expire date", () => {
      expect(calculateExpires("2018-01-01", "1")).toEqual("2018-01-02");
      expect(calculateExpires("2018-01-01", "10")).toEqual("2018-01-11");
      expect(calculateExpires("2018-01-01", "30")).toEqual("2018-01-31");
      expect(calculateExpires("2018-12-31", "10")).toEqual("2019-01-10");
    });
  });

  describe("daysToExpire", () => {
    it("should calculate corret number of days", () => {
      // Passing second param for "simulating" todays date.
      expect(daysToExpire("2018-03-10", "2018-03-09")).toEqual(1);
      expect(daysToExpire("2018-03-14", "2018-03-09")).toEqual(5);
    });
  });
});
