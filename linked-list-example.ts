class LinkListNode<T> {
  constructor(public data: T, public next: LinkListNode<T> | null) {}
}

class LinkedList<T> implements Iterable<T> {
  public lastItem: LinkListNode<T> | null = null
  push(item: T) {
    const node = new LinkListNode<T>(item, this.lastItem)
    this.lastItem = node
  }

  [Symbol.iterator](): Iterator<T> {
    let item = this.lastItem
    return {
      next() {
        if (item) {
          let current = item
          item = item.next
          return {
            value: current.data,
            done: false,
          }
        } else {
          return {
            value: null,
            done: true,
          }
        }
      },
    }
  }
}

;(async () => {
  const sentence = new LinkedList<string>()

  sentence.push('data')
  sentence.push('storing')
  sentence.push('for')
  sentence.push('pattern')
  sentence.push('List')
  sentence.push('Linked')
  sentence.push('uses')
  sentence.push('that')
  sentence.push('structure')
  sentence.push('data')
  sentence.push('is')
  sentence.push('This')

  for (const word of sentence) {
    console.log(`${word} `)
  }
})()
