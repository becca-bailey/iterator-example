const makeIterator = require("../index");

describe("createIterator", () => {
  it("returns an object with a next() function", () => {
    const iterator = makeIterator([]);

    expect(typeof iterator.next).toEqual("function");
  });

  xit("returns an object with value and done properties", () => {
    const iterator = makeIterator([]);

    expect(iterator.next()).toEqual({ value: undefined, done: true });
  });

  xit("returns the first item in the collection", () => {
    const iterator = makeIterator([1]);

    expect(iterator.next()).toEqual({ value: 1, done: true });
  });

  xit("returns subsequent items in the collection", () => {
    const iterator = makeIterator([1, 2, 3]);

    expect(iterator.next()).toEqual({ value: 1, done: false });
    expect(iterator.next()).toEqual({ value: 2, done: false });
    expect(iterator.next()).toEqual({ value: 3, done: true });
  });
});
