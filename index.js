import FamilyTree from './familyTree.js'

// Create an instance of FamilyTree
const tree = new FamilyTree()

// Add family members
tree.addMember('Nicha', '1950-01-01', { country: 'Thailand' })
tree.addMember('Fah', '1975-05-20', { country: 'England' });
tree.addMember('Daniel', '2000-10-15', { country: 'Thailand' })

// Define parent-child relationships
tree.defineParentChild('Nicha', 'Fah')
tree.defineParentChild('Fah', 'Daniel')

// Update details or add more members as needed
tree.addMember('Somchai', '2010-04-25', { country: 'Canada' })
tree.defineParentChild('Daniel', 'Somchai')

// Get descendants of a person
const NichaDescendants = tree.getDescendants('Nicha')
console.log(`Descendants of Nicha: ${NichaDescendants.join(', ')}`)

// Get descendants of another person
const fahDescendants = tree.getDescendants('Fah')
console.log(`Descendants of Fah: ${fahDescendants.join(', ')}`)

// Get birthplace of a person
const birthplace = tree.getBirthPlace('Nicha')
console.log(`Birthplace of Nicha: ${birthplace.country}`)

// Get birthplace of all descendants of a person
const NichaDescendantsWithBirthplace = tree.getDescendantsWithBirthplace('Nicha')
NichaDescendantsWithBirthplace.forEach((descendant) => {
    console.log(`${descendant.name} was born in ${descendant.birthplace.country}`)
    })