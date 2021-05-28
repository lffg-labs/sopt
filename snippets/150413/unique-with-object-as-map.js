// src: https://pt.stackoverflow.com/a/150415/69296

var array = [true, true, false, false, 1, 2, 3, 1, 2, 3, 'a', 'b', 'c', 'a'];
var unique = array.reduce((acc, curr) => (acc[curr] = '', acc), {});

// (8) ["1", "2", "3", "true", "false", "a", "b", "c"]
console.log(Object.keys(unique));
