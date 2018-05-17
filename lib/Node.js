export default class Node {
  constructor (string) {
    this.data = string || null;
    this.children = {};
    this.completedWord = null;
  }
}