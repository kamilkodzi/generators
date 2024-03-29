async function* createAsyncGenerator() {
  yield await Promise.resolve(1)
  yield await Promise.resolve(2)
  yield await Promise.resolve(3)
  throw new Error('End')
}
const asyncGen = createAsyncGenerator()
asyncGen.next().then((res) => console.log(res.value)) // 1
asyncGen.next().then((res) => console.log(res.value)) // 2
asyncGen.next().then((res) => console.log(res.value)) // 3
asyncGen.next().then((res) => console.log(res.value)) // 3
