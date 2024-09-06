
// Initialize a new Person class defining that every person has properties such as a name, birthdate, birthplace, and children
class Person {
  constructor(name, birthdate, birthplace = {}) {
    this.name = name
    this.birthdate = birthdate
    this.birthplace = birthplace
    this.children = []
  }

  // Add a child to the children array with some validations
  addChild(child) {
    if (!(child instanceof Person)) {
      throw new Error('Child must be an instance of Person')
    }
    if(this.children.some((c) => c.name === child.name)) {
      throw new Error('Child already exists')          // validation to prevent duplicate children
    }
    this.children.push(child)  // add child to the children array if validations pass
  }
}


// FamilyTree class manages the collection of people instances and their relationships
//  Initialize a new FamilyTree object with an empty array for members
class FamilyTree {
  constructor() {
    this.members = {}
  }

  // Add a new member to the family tree with some validations
  addMember(name, birthdate, birthplace = {}) {
    if (this.members[name]) {
      throw new Error('Member already exists')      // validation to check if the member already exists
    }
    const person = new Person(name, birthdate, birthplace)  // create a new Person instance
    this.members[name] = person    // add the new person to the members array, using the name as the key
    return person
  }

  // Establish a parent-child relationship between two existing members
  defineParentChild(parentName, childName) {
    const parent = this.members[parentName]
    const child = this.members[childName]
    if (!parent || !child) {
      throw new Error('Parent or child not found')
    }
    parent.addChild(child)    // use the addChild method to add the child to the parent's children array
  }

  // Get all descendants of a person
  getDescendants(name) {
    const person = this.members[name]
    if (!person) {
      throw new Error('Person not found')   // validation to check if the person exists
    }
    const descendants = []                 // initialize an empty array to store the descendants
    const findDescendants = (p) => {        // recursive function to find all descendants
      p.children.forEach((child) => {       // loop through the children of the person
        descendants.push(child.name)       // add the child's name to the descendants array
        findDescendants(child)              // recursively call itself for each child to find further descendants
      })
    }
    findDescendants(person)                 // call the recursive function with the specified person 
    return descendants                       // return the complete descendants array
  }

  // Get the birthplace of a specified person
  getBirthPlace(name) {
    const person = this.members[name]
    if (!person) {
      throw new Error('Person not found')         
    }
    return person.birthplace
  }

  // Get the birthplace of all descendants of a specified person
  getDescendantsWithBirthplace(name) {
    const person = this.members[name]
    if (!person) {
      throw new Error('Person not found')         
    }
    const descendantsBirthplace = []
    const findDescendants = (p) => {
      p.children.forEach((child) => {         // loop through the children of the person
        descendantsBirthplace.push({          // add an object with name and birthplace of the child
          name: child.name, 
          birthplace: child.birthplace 
        })
        findDescendants(child)               // recursive call for grandchildren
      })
    }
    findDescendants(person)
    return descendantsBirthplace
  }

}
  

  export default FamilyTree