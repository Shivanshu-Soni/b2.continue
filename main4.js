console.log("hello js");
console.log("hello 2");

// this is non blocking(it is not blocking the next statement)
// non blocking help us to achieve asyc program.
// it will not stop other line to get executed .

setTimeout(() => console.log("hello 3"),1000);

console.log("hello 4");
console.log("hello 5");
