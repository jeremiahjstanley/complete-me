import Node from '../lib/Node.js';

export default class Trie {
  constructor() {

    this.root = new Node();

    this.counter = 0;

  }

  insert(string) {
    let currentNode = this.root;

    let letters = string.toLowerCase().split(''); 

    this.counter++;
    while (letters.length) {
      let currentLetter = letters.shift();

      if (!currentNode.children[currentLetter]) {
        currentNode.children[currentLetter] = new Node(currentLetter);
      }
      currentNode = currentNode.children[currentLetter];
    }
    currentNode.completedWord = string;
  }

  count() {
    return this.counter;
  }

  populate(wordArray) {
    wordArray.forEach(word => {
      this.insert(word);
    }); 
  }

  suggest(prefix) {
    let suggestions = [];

    let currentNode = this.root;

    let prefixLetters = prefix.toLowerCase().split('');

    let errorMessage;

    prefixLetters.forEach(letter => {
      if (!currentNode) {
        errorMessage = 'No Results Found';
      } else {
        currentNode = currentNode.children[letter]; 
      }
    });

    if (errorMessage) {
      return errorMessage;
    }

    const search = node => {

      if (node.completedWord) {
        suggestions.push(node.completedWord);
      }
      let nodeKeys = Object.keys(node.children);

      nodeKeys.forEach(key => {
        search(node.children[key]);
      });
    };
    search(currentNode);
    return suggestions;
  }

}