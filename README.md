# INFO

This will be split into two repos in future. When i will end studying Streams, I will add some implementation for generators. Probably some transform package to be used with CSV or XLM.

### How to run ?

If you on VSC like me, just install `Code Runner` plugin and start code directly form file with right click -> run
Maybe there is a need to have ts-node package instaled globally
[ts-node package](https://www.npmjs.com/package/ts-node)

## Iterators and generators

You can find evolution and different styles to work with iterators and generators.
It's not houndred percent accurate but in many cases you can thread generators as
more marure version of iterators and those should be first choice solution in most cases

One of pros using generator is tranforming data on demand in stream like paterns:
[Practical Use Cases of Generators](https://betterprogramming.pub/javascript-generators-practical-use-cases-945d512ef252)

## Linked list structure

You can find one of the custom data structure that could be effitiently utilised with large data

#### [Advantages Of Linked List:](https://www.geeksforgeeks.org/advantages-and-disadvantages-of-linked-list/)

1. Dynamic data structure: A linked list is a dynamic arrangement so it can grow and shrink at runtime by allocating and deallocating memory. So there is no need to give the initial size of the linked list.
1. No memory wastage: In the Linked list, efficient memory utilization can be achieved since the size of the linked list increase or decrease at run time so there is no memory wastage and there is no need to pre-allocate the memory.
1. Implementation: Linear data structures like stacks and queues are often easily implemented using a linked list.
1. Insertion and Deletion Operations: Insertion and deletion operations are quite easier in the linked list. There is no need to shift elements after the insertion or deletion of an element only the address present in the next pointer needs to be updated.
1. Flexible: This is because the elements in Linked List are not stored in contiguous memory locations unlike the array.
1. Efficient for large data: When working with large datasets linked lists play a crucial role as it can grow and shrink dynamically.
1. Scalability: Contains the ability to add or remove elements at any position.

#### [Disadvantages Of Linked List:](https://www.geeksforgeeks.org/advantages-and-disadvantages-of-linked-list/)

1. Memory usage: More memory is required in the linked list as compared to an array. Because in a linked list, a pointer is also required to store the address of the next element and it requires extra memory for itself.
1. Traversal: In a Linked list traversal is more time-consuming as compared to an array. Direct access to an element is not possible in a linked list as in an array by index. For example, for accessing a node at position n, one has to traverse all the nodes before it.
1. Reverse Traversing: In a singly linked list reverse traversing is not possible, but in the case of a doubly-linked list, it can be possible as it contains a pointer to the previously connected nodes with each node. For performing this extra memory is required for the back pointer hence, there is a wastage of memory.
1. Random Access: Random access is not possible in a linked list due to its dynamic memory allocation.
1. Lower efficiency at times: For certain operations, such as searching for an element or iterating through the list, can be slower in a linked list.
1. Complex implementation: The linked list implementation is more complex when compared to array. It requires a complex programming understanding.
1. Difficult to share data: This is because it is not possible to directly access the memory address of an element in a linked list.
1. Not suited for small dataset: Cannot provide any significant benefits on small dataset compare to that of an array.
