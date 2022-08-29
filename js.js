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
    _add();
    _remove();
    return data;
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

console.log(renderModule().render());

// More complex Ex.
//revealing module pattern
//Turn "myModule" into a "renderModule" that only exposes the render method

let renderModule1 = function () {
  let data = [];
  let _render = (bool, _text) => {
    // click listeners for _add and _remove
    if (bool) {
      _add(_text);
    } else {
      _remove(_text);
    }
    return data;
  };
  let _add = (_text) => {
    data[`${_text.at(0)}`] = _text;
  };
  let _remove = (_text) => {
    delete data[`${_text.at(0)}`];
  };

  return {
    render: _render,
  };
};

let javascript = renderModule1().render(true, "javascript");
console.log(javascript);
let node = renderModule1().render(true, "node");
console.log(node);

// Returning a functions instead of an object

//revealing module pattern
//Turn "myModule" into a "renderModule" that only exposes the render method

let renderModule2 = function () {
  let num = 0;

  function set(boolean) {
    if (boolean) return _add();
    return _rest();
  }
  function _add() {
    num += 1;
    return num;
  }
  function _rest() {
    num -= 1;
    return num;
  }
  return set;
};

console.log(renderModule2()(false));
