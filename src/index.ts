import { Circle, Square } from './shapes'
import { calculateTax } from './tax'
import _ from 'lodash'
import chalk from 'chalk'

_.clone([1, 2, 3])

let circle = new Circle(1)
console.log(circle.radius)
console.log(new Square(1).width)

let tax = calculateTax(10_000, 'ICMS')
console.log(tax)

console.log(chalk.blue('an old falcon'))

let c: number
c = 1
