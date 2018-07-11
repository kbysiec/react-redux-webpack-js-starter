window.localStorage = {
  getItem() {},
  setItem() {},
};

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

window.requestAnimationFrame = function(callback) {
  setTimeout(callback);
};

module.exports = 'file-stub';
export default 'file-stub';
