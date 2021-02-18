(function () {
  Object.defineProperty(Object.prototype, '__win__', {
    enumerable: false,
    configurable: true,
    get: function () {
      return this;
    }
  });
  __win__.globalThis = __win__;
  delete Object.prototype.__win__;
})();
