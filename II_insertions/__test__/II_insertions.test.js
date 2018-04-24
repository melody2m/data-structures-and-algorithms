'use strict';

const LinkedList = require('../II_insertions');

describe('linked-list.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });

  test('#append', () => {
    const testList = new LinkedList();
    testList.append(5);
    expect(testList.head.value).toEqual(5);
    testList.append(6);
    expect(testList.head.next.value).toEqual(6);
    testList.append(7);
    expect(testList.head.next.next.value).toEqual(7);
  });

  test('#insertBefore', () => {
    const testList = new LinkedList();
    testList.append(5);
    testList.append(6);
    testList.append(7);
    testList.insertBefore(5, 20);
    expect(testList.head.value).toEqual(20);
    testList.insertBefore(6, 21);
    expect(testList.head.next.next.value).toEqual(21);
    testList.insertBefore(21, 99);
    expect(testList.head.next.next.value).toEqual(99);
  });

  test('#insertAfter', () => {
    const testList = new LinkedList();
    testList.append(5);
    testList.append(6);
    testList.append(7);
    testList.insertAfter(5, 20);
    expect(testList.head.next.value).toEqual(20);
    testList.insertAfter(6, 21);
    expect(testList.head.next.next.next.value).toEqual(21);
    testList.insertAfter(21, 99);
    expect(testList.head.next.next.next.next.value).toEqual(99);
  });
});
