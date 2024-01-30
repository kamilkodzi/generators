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

class GiftPack {
  name: string
  prods: Set<Product>
  constructor(name: string, ...prods: Product[]) {
    this.name = name
    this.prods = new Set(prods)
  }

  getTotalPrice() {
    return [...this.prods].reduce((total, p) => total + p.price, 0)
  }
  *getGenerator() {
    for (let p of this.prods) {
      yield p
    }
  }
}

let winterBundle = new GiftPack(
  'Winter snow bundle',
  new Product('Hat', 5.99),
  new Product('Gloves', 13.29),
  new Product('Socks', 0.99)
)

console.log(
  `Our ${winterBundle.name} cost: ${winterBundle.getTotalPrice()} total`
)
;[...winterBundle.getGenerator()].forEach((p) => console.log(p.toString()))
