import { mutations } from "./store";

describe("Store", () => {
  describe("mutations", () => {
    it("should set user correct", () => {
      const { setUser } = mutations;
      const store = { user: null };

      setUser(store, { uid: "123", email: "test@test.se" });
      expect(store.user).toEqual({ key: "123", email: "test@test.se" });
    });

    it("should clear use correct", () => {
      const { clearUser } = mutations;
      const store = { user: { key: "123", email: "test@test.se" } };

      clearUser(store);
      expect(store.user).toBeNull();
    });
  });
});
