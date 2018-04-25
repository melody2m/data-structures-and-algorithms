'use strict';

const LinkedList = require('../ll-kth-from-end');

describe('linked-list.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });

  test('#kthfromEnd', () => {
    const testList = new LinkedList();
    testList.insertAtHead(5);
    testList.insertAtHead(6);
    testList.insertAtHead(7);
    testList.insertAtHead(8);
    expect(testList.kthFromEnd(0).value).toEqual(5);
    expect(testList.kthFromEnd(1).value).toEqual(6);
    expect(testList.kthFromEnd(4)).toEqual('Exception');
  });
});
