const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(data) {
    super(data);
  }

  noChild(el, data) {
    if (el[getDirection(el, data)] === null) {
      return true;
    }
    return false;
  }

  isEqual(el, data) {
    if (el.data === data) {
      return true;
    }
    return false;
  }

  getDirection(el, data) {
    if (el.data < data) {
      return 'right';
    } else if (el.data > data) {
      return 'left';
    } else {
      return 'here';
    }
  }

  getClosestElem(el, data) {
    let targetElem = el;
    function getTargetElem(elem, data = data) {
      let direction = getDirection(elem, data);

      if (!noChild(elem, data)) {
        if (isEqual(elem, data)) {
          targetElem = elem; // is equal
          return;
        } else {
          getTargetElem(elem[direction]); // continue searching
        }
      } else {
        targetElem = elem; // has Not child
        return;
      }
    }
    getTargetElem(el);
    return targetElem;
  }

  root() {
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(/* data */) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(/* data */) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};