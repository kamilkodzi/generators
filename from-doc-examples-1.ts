export const aGeneratorObject = (function* () {
  yield 1
  yield 2
  yield 3
})()

console.log(typeof aGeneratorObject.next)
// "function" — it has a next method (which returns the right result), so it's an iterator

console.log(typeof aGeneratorObject[Symbol.iterator])
// "function" — it has an @@iterator method (which returns the right iterator), so it's an iterable

console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject)
// true — its @@iterator method returns itself (an iterator), so it's an iterable iterator
