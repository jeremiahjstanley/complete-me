import { expect } from 'chai';
import Trie from '../lib/Trie';


describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  })

  it('should exist', () => {
    expect(trie).to.exist;
  })

  it('should have a root node', () => {
    expect(trie.root).to.exist;
  })

  it('should start with a count of 0', () => {
    expect(trie.counter).to.equal(0);
  })

  describe('insert', () => {

    it('should be able to add a node to the trie', () => {
      trie.insert('dog');
      // console.log(JSON.stringify(trie, null, 4));
      expect(Object.keys(trie.root.children)).to.deep.equal(['d']);
    })

    it('should not create duplicate nodes ', () => {
      trie.insert('dog');
      trie.insert('dogs');
      trie.insert('doggos');

      expect(Object.keys(trie.root.children.d.children)).to.deep.equal(['o']);
    })

    it('should be able to add multiple nodes to the trie', () => {
      trie.insert('dog');
      trie.insert('dream');
      trie.insert('duck');
      trie.insert('desk');
      // console.log(JSON.stringify(trie, null, 4));
      expect(Object.keys(trie.root.children.d.children)).to.deep.equal(['o', 'r', 'u', 'e']);
    })

  })

  describe('suggest', () => {

    it('should take a prefix and return a suggestion array', () => {
      trie.insert('dog');
      trie.insert('dogs');
      trie.insert('door');
      let suggestionArray = trie.suggest('do')
      expect(suggestionArray).to.deep.equal(['dog', 'dogs', 'door'])
    })

    it('should return an error message if no words match the prefix', () => {
      trie.insert('drive');
      trie.insert('dusk');
      trie.insert('droll');
      let suggestionArray = trie.suggest('apple')
      expect(suggestionArray).to.equal('No Results Found')
    })

  })

  describe('count', () => {

    it('should return the number of words inserted', () => {
      trie.insert('dog');
      trie.insert('dolphin')
      let insertCount = trie.count()
      expect(insertCount).to.equal(2)
    })

  })

});



