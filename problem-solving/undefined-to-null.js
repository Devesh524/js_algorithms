// undefined to null

// One of the differences between null and undefined is how they are treated differently in JSON.stringify().
//
// JSON.stringify({a: null})      // '{"a":null}'
// JSON.stringify({a: undefined}) // '{}'
//
// JSON.stringify([null])         // '[null]'
// JSON.stringify([undefined])    // '[null]'
// This difference might create troubles if there are missing alignments between client and server. It might be helpful to enforce using only one of them.
//
//   You are asked to implement undefinedToNull() to return a copy that has all undefined replaced with null.
//
// undefinedToNull({a: undefined, b: 'BFE.dev'})
// // {a: null, b: 'BFE.dev'}
//
//   undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']})
// // {a: ['BFE.dev', null, 'bigfrontend.dev']}

const undefinedToNull = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) => {
      return value === undefined ? null : value;
    }),
  );
};

console.log(undefinedToNull({ a: undefined, b: 'BFE.dev' }));
console.log(undefinedToNull({ a: ['BFE.dev', undefined, 'bigfrontend.dev'] }));
