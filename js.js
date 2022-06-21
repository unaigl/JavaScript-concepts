const obj = {
  a: 1,
  f: () => {
    console.log(this);
  },
};

obj.f();

(() => {
  console.log(this);
})();
