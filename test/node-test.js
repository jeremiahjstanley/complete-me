import { expect } from 'chai';
import Node from '../lib/Node';

describe('Node', () => {
  let node;

  beforeEach(() => {
    node = new Node('dog');
  })

  it('should exist', () => {
    expect(node).to.exist;
  })

  it('should default data property to null', () => {
    node = new Node();
    expect(node.data).to.equal(null);
  })

  it('should take data and assign it to the node\'s data property', () => {
    expect(node.data).to.equal('dog');
  })

  it('should default completedWord property to null', () => {
    expect(node.completedWord).to.equal(null);
  })

  it('should have a children property of an empty object', () => {
    expect(node.children).to.deep.equal({});
  })

}) 

