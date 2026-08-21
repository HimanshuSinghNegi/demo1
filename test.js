const { add } = require("./app");

const result = add(12, 3);

if (result !== 15) {
    throw new Error("Test failed");
}

console.log("All tests passed! 1");
