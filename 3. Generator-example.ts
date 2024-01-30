export class Product {
  name: any
  price: any
  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }
  toString() {
    return `name: ${this.name}, price: ${this.price}`
  }
}

function* createProductIterator() {
  yield new Product('Shoes', 19.99)
  yield new Product('Coat', 34.39)
  yield new Product('Hat', 4.79)
  yield new Product('Umbrella', 10.49)
}

;[...createProductIterator()].forEach((p) => {
  console.log(p.toString())
})
