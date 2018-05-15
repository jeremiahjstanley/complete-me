import { expect } from 'chai';
import Node from '../lib/Node';

describe('Node', () => {
  let node;

  beforeEach(() => {
    node = new Node('pizza');
  })

  it('should be a thing', () => {
    expect(node).to.exist;
  })

  it('should default next to null', () => {
    expect(node.next).to.equal(null);
  })

  it('should take data and assign it to a data property', () => {
    expect(node.data).to.equal('pizza');
  })

  it('should have a lastNode property set to false', () => {
    expect(node.lastNode).to.equal(false);
  })

  it('should have a children property of an empty object', () => {
    expect(node.children).to.deep.equal({});
  })

}) 
