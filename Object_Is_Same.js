let source = {
  from: "chennai",
  name: "Loganathan",
  hobbies: ["ReadingBook"],
  obj: {
    address: "address"
  }
};

// let dest = {
//   from: "Sivakasi",
//   name: "Siva",
//   hobbies: ["ReadingBook"]
// };

let dest = {
  from: "chennai",
  name: "Loganathan",
  hobbies: ["ReadingBook"],
  obj: {
    address: "address"
  }
};

function isSame(source, object2) {
  if (Object.keys(source).length !== Object.keys(object2).length) return false;

  for (let key in source) {
    let value = source[key];
    if (!object2.hasOwnProperty(key)) {
      return false;
    } else {
      if (Array.isArray(value)) {
        if (!isEqualArray(value, object2[key])) {
          return false;
        }
      } else if (typeof value === "object") {
        if (!isSame(value, object2[key])) {
          return false;
        }
      } else {
        if (object2[key] !== value) return false;
      }
    }
  }
  return true;
}

function isEqualArray(source, copy) {
  if (source.length !== copy.length) return false;
  for (let element of source) {
    if (!copy.includes(element)) {
      return false;
    }
  }
  return true;
}

console.log(isSame(source, dest));
