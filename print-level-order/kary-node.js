'use strict';

module.exports = class KAryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  appendChild(value) {
    const nodeToAppend = new KAryNode(value);
    this.children.push(nodeToAppend);
  }
};
