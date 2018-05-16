import Node from '../lib/Node.js';

class Trie {
  constructor() {
    this.root = new Node(data);
    this.count = 0;
  }

  insert(word) {
    let letters = word.split(''); 
    let currentNode = this.root;

    while(letters.length) {
      let currentLetter = letters.shift();
      currentNode.children[currentLetter] = new Node(currentLetter);
  }

  count() {

  }


}