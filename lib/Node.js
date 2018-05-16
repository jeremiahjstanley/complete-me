export default class Node {
  constructor (data) {
    this.root = null;
    this.data = data || null;
    this.next = null;
    this.children = {};
    this.completedWord = false;
  }
}