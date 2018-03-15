import { mutations } from "./store";

describe("Store", () => {
  describe("mutations", () => {
    it("should set user correct", () => {
      const { setUser } = mutations;
      const store = { user: null };

      setUser(store, { id: "123", name: "test" });
      expect(store.user).toEqual({ id: "123", name: "test" });
    });

    it("should clear use correct", () => {
      const { clearUser } = mutations;
      const store = { user: { id: "123", name: "test" } };

      clearUser(store);
      expect(store.user).toBeNull();
    });
  });
});
