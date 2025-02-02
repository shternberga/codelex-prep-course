/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

class Stack {
  items: any[];
  constructor() 
  { 
      this.items = []; 
  } 
  push(n: number) {
    this.items.push(n); 
  }

  pop() {
    { 
      return this.items.pop(); 
  } 
  }

  peek() {
    return this.items[this.items.length - 1]; 
  }
}

export { Stack };
