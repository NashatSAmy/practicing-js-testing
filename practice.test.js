import {capitalize} from './practice'
import {reverseString} from './practice'
import {calculator} from './practice'
import {caesarCipher} from './practice'
import {analyzeArray} from './practice'

test('First character capitalized.', () => {
  expect(capitalize("nashat")).toMatch(/[^A-Z]/)
})

test('String reversed.', () => {
  expect(reverseString("nashat")).toMatch('tahsan')
})

test('add.', () => {
  expect(calculator.add(2,2)).toBe(4)
})

test('subtract.', () => {
  expect(calculator.subtract(3,2)).toBe(1)
})

test('divide.', () => {
  expect(calculator.divide(2,2)).toBe(1)
})

test('multiply.', () => {
  expect(calculator.multiply(2,5)).toBe(10)
})

test('caesarCipher base Case.', () => {
  expect(caesarCipher('defend the east wall of the castle',1)).toMatch('efgfoe uif fbtu xbmm pg uif dbtumf')
})

test('caesarCipher wrapping.', () => {
  expect(caesarCipher('defend the east wall of the castle',23)).toMatch('abcbka qeb bxpq txii lc qeb zxpqib')
})

test('caesarCipher punctuation.', () => {
  expect(caesarCipher('defend the east wall, of the castle',23)).toMatch('abcbka qeb bxpq txii, lc qeb zxpqib')
})

test('analyzeArray.', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})


