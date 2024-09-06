import * as chai from 'chai'
const assert = chai.assert
const expect = chai.expect
import FamilyTree from '../familyTree.js'

describe('FamilyTree', function() {
  let tree

  beforeEach(() => {
    tree = new FamilyTree();
    tree.addMember('Nicha', '1950-01-01', { country: 'Thailand' })
    tree.addMember('Fah', '1975-05-20', { country: 'England' });
    tree.addMember('Daniel', '2000-10-15', { country: 'Thailand' })
  })

  it('should add members to the family tree', function() {
    expect(tree.members).to.have.property('Nicha')
    expect(tree.members).to.have.property('Fah')
    expect(tree.members['Nicha'].birthdate).to.equal('1950-01-01')
  })

  it('should define parent-child relationships', function() {
    tree.defineParentChild('Nicha', 'Fah')
    tree.defineParentChild('Fah', 'Daniel')

    expect(tree.members['Nicha'].children[0].name).to.equal('Fah')
    expect(tree.members['Fah'].children[0].name).to.equal('Daniel')
  })

  it('should get all descendants of a person', function() {
    tree.defineParentChild('Nicha', 'Fah')
    tree.defineParentChild('Fah', 'Daniel')
    
    const descendants = tree.getDescendants('Nicha')
    expect(descendants).to.have.members(['Fah', 'Daniel'])
  })

  it('should throw an error if adding an invalid parent-child connection', function() {
    expect(() => tree.defineParentChild('Nicha', 'Nonexistent')).to.throw('Parent or child not found')
  })

  it('should throw an error if a non-Person object is added as a child', function() {
    const invalidChild = { name: 'Invalid', birthdate: '2023-01-01' }
    expect(() => tree.members['Nicha'].addChild(invalidChild)).to.throw('Child must be an instance of Person')
  })

  it('should throw an error if a person is not found', function() {
    expect(() => tree.getDescendants('Nonexistent')).to.throw('Person not found')
    expect(() => tree.getBirthPlace('Nonexistent')).to.throw('Person not found')
  })

it('should get the birthplace of a person', function() {
    const birthplace = tree.getBirthPlace('Nicha')
    expect(birthplace.country).to.equal('Thailand')
    expect(birthplace).to.have.property('country', 'Thailand')
  })
})