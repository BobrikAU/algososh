import { LinkedListNode } from "./linkedListNode";

export class LinkedList<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T> | undefined;
  length: number;
  constructor(initializingArray: T[]) {
    this.length = 0;
    this.head = this._creatInitializingList(initializingArray);
  }

  _creatInitializingList(initializingArray: T[]) {
    let head = new LinkedListNode<T>(initializingArray[initializingArray.length - 1]);
    this.tail = head;
    this.length += 1;
    for (let i = initializingArray.length - 2; i >= 0; i--) {
      const newLinkedListNode = new LinkedListNode<T>(initializingArray[i], head);
      head = newLinkedListNode;
      this.length += 1;
    }
    return head;
  }

  prepend(newElement: T) {
    const newHead = new LinkedListNode<T>(newElement, this.head);
    this.head = newHead;
    this.length += 1;
  }

  getElementByPositionNumber(number: number) {
    let element = this.head;
    for (let i = 2; i <= number; i++) {
      if (element.next) {
        element = element.next;
      }
    }
    return element;
  }

  _getPenultimateElement() {
    let listNode = this.head;
    if (listNode.next === null || listNode.next.next === null) {
      return listNode
    }
    while (listNode.next && listNode.next.next !== null) {
      listNode = listNode.next;
    }
    return listNode;
  }

  append(newElement: T) {
    const newTail = new LinkedListNode<T>(newElement);
    if (this.tail) {
      this.tail.next = newTail;
      this.tail = newTail;
      this.length += 1;
    }
  }

  deleteHead() {
    if (this.head.next !== null) {
      this.head = this.head.next;
      this.length -= 1;
    }
  }

  deleteTail() {
    const penultimateElement = this._getPenultimateElement();
    penultimateElement.next = null;
    this.tail = penultimateElement;
    this.length -= 1;
  }

  addByIndex(newElement: T, index: number) {
    const newListPart = new LinkedListNode<T>(newElement);
    if (index === 0) {
      this.prepend(newElement);
      return newListPart;
    }
    let prev = null;
    let curr: LinkedListNode<T> | null = this.head;
    for (let i = 1; i <= index; i++) {
      prev = curr;
      curr = curr && curr.next
    }
    if (prev) {
      prev.next = newListPart;
      newListPart.next = curr;
    }
    this.length += 1;
    return newListPart;
  }

  deleteByIndex(index: number) {
    const prevListNode = this.getElementByPositionNumber(index);
    if (prevListNode.next && prevListNode.next.next && index !== 0) {
      prevListNode.next = prevListNode.next.next;
    } else if (prevListNode.next && prevListNode.next.next === null) {
      prevListNode.next = null;
      this.tail = prevListNode;
    } if (index === 0) {
      this.deleteHead()
    }
    this.length -= 1;
  }
}