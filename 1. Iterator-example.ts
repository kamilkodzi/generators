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

function createProductIterator() {
  const shoes = new Product('Shoes', 19.99)
  const coat = new Product('Coat', 34.39)
  const hat = new Product('Hat', 4.79)
  const umbrella = new Product('Umbrella', 10.49)

  let lastVal: Product

  return {
    next() {
      switch (lastVal) {
        case undefined:
          lastVal = shoes
          return { value: shoes, done: false }
        case shoes:
          lastVal = coat
          return { value: coat, done: false }
        case coat:
          lastVal = hat
          return { value: hat, done: false }
        case hat:
          lastVal = umbrella
          return { value: umbrella, done: false }
        case umbrella:
          return { value: undefined, done: true }
      }
    },
  }
}

const iterator = createProductIterator()
let result = iterator.next()

while (!result?.done) {
  console.log(result?.value?.toString())
  result = iterator.next()
}
