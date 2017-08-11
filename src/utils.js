
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
