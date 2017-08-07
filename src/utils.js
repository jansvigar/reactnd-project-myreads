
export function camelCase(str) {
  return str.trim()
            .toLowerCase()
            .replace(/\W+(.)/g, function(match, char){
              return char.toUpperCase();
            });
};
