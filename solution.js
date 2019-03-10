function createIterator(collection) {
  let i = 0;
  return {
    next: function() {
      if (i < collection.length - 1) {
        const result = { value: collection[i], done: false };
        i += 1;
        return result;
      }
      return { value: collection[i], done: true };
    }
  };
}

module.exports = createIterator;
