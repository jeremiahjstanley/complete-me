import { expect } from 'chai';
import Trie from '../lib/Trie';
import fs from 'fs';

const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n');


describe('Trie', () => {
  let trie = new Trie();;

  describe('populate', () => {

    it('should take an array as an argument', () => {
      trie.populate(dictionary);
      let dictionaryCount = trie.count()
      expect(dictionaryCount).to.equal(235886)
    })

  })

})
