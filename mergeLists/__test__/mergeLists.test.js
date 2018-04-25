'use strict';

const LinkedList = require('../mergeLists');

describe('linked-list.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });

  test('#mergeLists', () => {
    const testList = new LinkedList();
    const testList2 = new LinkedList();
    testList.insertAtHead(7);
    testList.insertAtHead(6);
    testList.insertAtHead(5);
    testList2.insertAtHead(12);
    testList2.insertAtHead(11);
    testList2.insertAtHead(10);
    testList.mergeLists(testList, testList2);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(10);
    expect(testList.head.next.next.value).toEqual(6);
  });
});
