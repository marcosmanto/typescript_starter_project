"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shapes_1 = require("./shapes");
const tax_1 = require("./tax");
const lodash_1 = __importDefault(require("lodash"));
const chalk_1 = __importDefault(require("chalk"));
lodash_1.default.clone([1, 2, 3]);
let circle = new shapes_1.Circle(1);
console.log(circle.radius);
console.log(new shapes_1.Square(1).width);
let tax = (0, tax_1.calculateTax)(10000);
console.log(tax);
console.log(chalk_1.default.blue('an old falcon'));
//# sourceMappingURL=index.js.map