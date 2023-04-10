/*
1. Write a function that creates a closure and returns a function that can add
a specific number to any number passed to it. For example, if the closure is
created with 5, the returned function should add 5 to any number passed
to it.
*/
// function createAdder(num) {
//     return function (x) {
//         return num + x;
//     }
// }
// const addFive = createAdder(5);
// const result = addFive(10);
// console.log(result);







/*
2. Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested.
*/
// function searchArray(array, value) {
//     if (array.length === 0) {
//         return false;
//     }
//     if (array[0] === value) {
//         return true;
//     }
//     return searchArray(array.slice(1), value);
// }
// const myArray = [1, 2, 3, 4, 5];
// const valueToFind = 3;
// const result = searchArray(myArray, valueToFind);
// console.log(result);









/*
3. Write a function that adds a new paragraph element to the bottom of an
HTML document. The function should take a string argument that will be
used as the text content of the new paragraph element.
*/
// function addParagraph(text) {

//     var newParagraph = document.createElement("p");

//     var textNode = document.createTextNode(text);
//     newParagraph.appendChild(textNode);

//     document.body.appendChild(newParagraph);
// }
// addParagraph("This is some new text!");








/*
4. Write a function that adds a new list item to an unordered list in an HTML
document. The function should take a string argument that will be used as
the text content of the new list item.
*/
// function addListItem(text) {
//     // Create a new list item
//     var li = document.createElement("li");

//     // Set the text content of the list item
//     var itemText = document.createTextNode(text);
//     li.appendChild(itemText);

//     // Add the new list item to an existing list with the id "myList"
//     var ul = document.getElementById("myList");
//     ul.appendChild(li);
// }
// addListItem("Item 3");

// //write this in html file

// <ul id="myList">
//     <li>Item 1</li>
//     <li>Item 2</li>
// </ul>







/*
5. Write a function that changes the background color of an HTML element.
The function should take two arguments: the first argument is a reference
to the HTML element, and the second argument is a string representing
the new background color.
*/
// function backColor(target, color) {

//     target.style.backgroundColor = color;
// }
// let backGround = document.querySelector("#para");
// backColor(backGround, "red");








/*
6. Write a function that saves an object to localStorage. The function should
take two arguments: the first argument is a string representing the key to
use for storing the object, and the second argument is the object to store.
*/
// function saveObjectToLocalStorage(key, obj) {

//     if (typeof (Storage) !== "undefined") {

//         localStorage.setItem(key, JSON.stringify(obj));
//     } else {
//         console.log("Local storage is not supported by this browser.");
//     }
// }
// const myObj = {
//     name: "Shehroz",
//     age: 17,
// };
// saveObjectToLocalStorage("myKey", myObj);

// const retrievedObj = JSON.parse(localStorage.getItem("myKey"));
// console.log(retrievedObj); // { name: "John", age: 30 }









/*
7. Write a function that retrieves an object from localStorage. The function
should take one argument, which is a string representing the key used to
store the object. The function should return the object.
*/
// function getObjectFromLocalStorage(key) {
//     const storedObject = localStorage.getItem(key);
//     if (storedObject) {
//         return JSON.parse(storedObject);
//     }
//     return null;
// }
// const myObject = getObjectFromLocalStorage("myKey");
// console.log(myObject);






/*
8. Write a function that takes an object and saves each property to
localStorage using the property name as the key and the property value as
the value. The function should also retrieve the object from localStorage
and return it as a new object.
*/
// function saveAndRetrieveFromLocalStorage(obj) {

//     for (const property in obj) {
//         localStorage.setItem(property, obj[property]);
//     }

//     const newObj = {};
//     for (const property in obj) {
//         newObj[property] = localStorage.getItem(property);
//     }
//     return newObj;
// }
// const myObj = {
//     name: "Shehroz",
//     age: 17,
//     city: "Peshawar"
// };
// const newObj = saveAndRetrieveFromLocalStorage(myObj);
// console.log(newObj);
