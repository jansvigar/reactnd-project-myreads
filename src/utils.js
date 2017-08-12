
export function camelCase(str) {
  return str.trim()
            .toLowerCase()
            .replace(/\W+(.)/g, function(match, char){
              return char.toUpperCase();
            });
};

export function debounce(callback, wait, context) {
  let timeout;
  function debounced(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  }

  debounced.cancel = () => {
    if(timeout !== undefined) {
      clearTimeout(timeout);
    }
  };

  return debounced;
}

export function removeDuplicates(arr, prop) {
  let mappedArr = arr.map(mappedObj => mappedObj[prop]);

  let uniq = arr.filter((element, index, array) => {
    return mappedArr.indexOf(element[prop]) === index;
  });

  return uniq;
}

export function sort(items = []) {
  return function (sortBy) {
    let sortedItems = [].concat(items);
    sortedItems.sort((a, b) => {
      a = a[sortBy] || 0;
      b = b[sortBy] || 0;
      return compare(a, b);
    });

    return sortedItems;
  }
}

function compare(a, b) {
    const isNumber = typeof(a) === 'number' && typeof(b) === 'number';
    const isString = typeof(a) === 'string' && typeof(b) === 'string';

    if(isNumber) {
      return a - b;
    }

    if(isString) {
      a = a.toUpperCase();
      b = b.toUpperCase();
      return a < b
               ? -1
               : a > b
               ? 1 : 0;
    }

    return 0;
}
