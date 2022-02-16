const obj1 = {
  name: "Alexey",
  getName: function(age = 93) {
    return this.name + ' ' + age;
  }
};

const getNameFn = obj1.getName;

const obj2 = {
  name: "Peter",
};

console.log(getNameFn.bind(obj2)());

Object.prototype.selfBind = function (thisArg, ...args) {
  const fn = this;
  return function (...rest) {
    const uuid = Date.now().toString();
    thisArg[uuid] = fn;
    const result = thisArg[uuid](...args, ...rest);
    delete thisArg[uuid];
    return result;
  }
}

console.log(getNameFn.selfBind(obj2)(1))