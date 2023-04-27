// Define an interface Book with the following properties:
// id (number)
// title (string)
// author (string)
// published (Date)
// available (boolean) 
interface Book {
  id: number;
  title: string;
  author: string;
  published: Date;
  available: boolean;
}

//Create an array books with the type Book[] and add a few sample books to the array.
let books: Book[] = [
  { id: 1, title: "Chocolate Island", author: "Alexander McCall Smith", published: new Date("2022-03-01"), available: true },
  { id: 2, title: "The America's Test Kitchen Cooking School Cookbook", author: "America's Test Kitchen", published: new Date("2013-10-15"), available: true },
  { id: 3, title: "The Hunger Games", author: "Suzanne Collins", published: new Date("2008-09-14"), available: false },
  { id: 4, title: "The Boxcar Children", author: "Gertrude Chandler Warner", published: new Date("1942-08-01"), available: false },

];

//Define a function addBook(book: Book): void that takes a Book object as a parameter and adds it to the books array.
function addBook(book: Book): void {
  books.push(book);
}

//Define a function findBookById(id: number): Book | undefined that takes a book id as a parameter and returns the book with the given id or undefined if the book is not found.
function findBookById(id: number): Book | undefined {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      return books[i];
    }
  }
  return undefined;
}

//Define a function updateBook(book: Book): boolean that takes a Book object as a parameter, 
//finds the book with the same id in the books array, and updates its properties. 
//The function should return true if the book was updated successfully or false if the book was not found.
function updateBook(book: Book): boolean {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === book.id) {
      books[i] = book;
      return true;
    }
  }
  return false;
}

//Define a function removeBook(id: number): boolean that takes a book id as a parameter and removes the book with the given id from the books array. The function should return true if the book was removed successfully or false if the book was not found.
function removeBook(id: number): boolean {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      books.splice(i, 1);
      return true;
    }
  }
  return false;
}

//tests functions
console.log(books); //total books all print
addBook({ id: 5, title: "", author: "J.D. Salinger", published: new Date("1951-07-16"), available: true }); //adds book
console.log(books);
console.log(findBookById(2));
console.log(findBookById(4)); 
console.log(removeBook(2));
console.log(books);
console.log(updateBook({ id: 3, title: "Pobre Ana", author: "Blaine Ray", published: new Date("1996-01-01"), available: false }));
console.log(updateBook({ id: 4, title: "The Boxcar Children", author: "Gertrude Chandler Warner", published: new Date("1942-08-01"), available: false  }));
console.log(books);



