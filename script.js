const last = (array) => {
    return array[array.length - 1];
  };
  console.log(last([1, 2, 3, 4, 5]));
  
  const initial = (array) => {
    if (!Array.isArray(array)) {
      return [];
    }
    return array.slice(0, -1);
  };
  console.log(initial([1, 2, 3, 4]));
  
  const head = (array) => {
    return array.slice(0, 1)[0];
  };
  console.log(head([1, 2, 3, 4]));
  
  const tail = (array) => {
    if (!Array.isArray(array)) {
      return [];
    }
    return array.slice(1);
  };
  console.log(tail([1, 2, 3, 4, 5]));
  
  const flattenDepth = (array, depth = 1) => {
    if (depth === 0) {
      return array.slice();
    }
    return array.reduce((acc, val) => {
      if (Array.isArray(val)) {
        acc.push(...flattenDepth(val, depth - 1));
      } else {
        acc.push(val);
      }
      return acc;
    }, []);
  };
  console.log(flattenDepth([1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]], 4));

  const fill = (array, value, start = 0, end = array.length) => {
    for (let i = start; i < end; i++) {
        array[i] = value;
      }
      return array
    };
    console.log(fill([1, 2, 3, 4, 5], 0, 2, 4));