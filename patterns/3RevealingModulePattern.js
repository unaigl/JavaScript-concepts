//revealing module pattern
//Turn "myModule" into a "renderModule" that only exposes the render method

let myModule = {
  data: [],
  render: () => {},
  add: () => {},
  remove: () => {},
};

let renderModule = function () {
  let data = [];
  let _render = () => {
    // click listeners for _add and _remove
    if (use) {
      data;
      _add();
      _remove();
    }
  };
  let _add = () => {
    // Some logic
  };
  let _remove = () => {
    // Some logic
  };

  return {
    render: _render,
  };
};

console.log(renderModule().render);
