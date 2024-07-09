let arr = [
    1,
    "2",
    true,
    [],
    {},
    undefined,
    null,
    NaN,
    1234,
    124421,
    "Alex"
]

let number = []
let object = []
let string = []
let boolean = []

arr.forEach(item => {
    if (typeof item === 'number' && !isNaN(item)) {
        number.push(item);
    } else if (typeof item === 'object' && item !== null) {
        object.push(item);
    } else if (typeof item === 'string') {
        string.push(item);
    } else if (typeof item === 'boolean') {
        boolean.push(item);
    }
});
