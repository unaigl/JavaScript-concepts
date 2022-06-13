//revealing module pattern
//Turn "myModule" into a "renderModule" that only exposes the render method

let myModule = {
  data: [],
  render: () => {},
  add: () => {},
  remove: () => {},
};

let renderModule = function () {
  let data = [],
    _render = () => {
      // click listeners for _add and _remove
    },
    _add = () => {
      // Some logic
    },
    _remove = () => {
      // Some logic
    };

  return {
    render: _render,
  };
};
