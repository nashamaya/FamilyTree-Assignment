# Project Title : Family Tree
A family tree project demonstrating the use of JavaScript classes and recursion to model family relationships and retrieve descendants' information. 

# Description
This project is part of an algorithm and structural foundations assignment, focusing on building a dynamic family tree system using JavaScript. It models family members as objects with attributes like name, birthdate, and birthplace, and allows users to define parent-child relationships. The system also supports retrieving a person's descendants, including their birthplaces, by utilizing recursive algorithms. The project highlights object-oriented programming concepts and explores the creation, manipulation, and traversal of a tree-like data structure in a family context.

# Installation Instructions
1. Clone the Repository
```JavaScript
git clone https://github.com/nashamaya/FamilyTree-Assignment.git
```
2. Navigate to the project directory
```JavaScript
cd family-tree-project
```
3. Install Dependencies
  
```JavaScript
npm install 
```

4. Specify familyTree.js in 'package.json' and add a script to start your application
```JavaScript
"main": "familyTree.js"

"scripts": {
    "start": "node familyTree.js",
  },
```
5. Run the project

```JavaScript
node index.js
```
6. Example Output
```JavaScript
Using Nicha as a specified person to find all the name of her decendants and where they were born. When run 'node index.js', expected output as follows:

Descendants of Nicha: Fah, Daniel, Somchai
Descendants of Fah: Daniel, Somchai
Birthplace of Nicha: Thailand      
Fah was born in England
Daniel was born in Thailand        
Somchai was born in Canada
```
