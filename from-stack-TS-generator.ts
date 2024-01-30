export default class GeneratorClass {
  count: number
  constructor() {
    this.count = 0
  }
  *generator(): IterableIterator<number> {
    this.count++
    yield this.count
  }
}

const generator = new GeneratorClass()
console.log(generator.generator().next())
console.log(generator.generator().next())
console.log(generator.generator().next())
console.log(generator.generator().return(100)) // Why it is not finishing ?
console.log(generator.generator().next())
