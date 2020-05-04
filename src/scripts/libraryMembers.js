import library from "./library.js"

/*
    Purpose:
    This file contains all code related to manipulating,
    or accessing the list of library member's books.
*/

const MembersBooksDatabase = [
  {
    "id": 1,
    "firstName": "Rose",
    "lastName": "Thorne",
    "books": ["To Kill a Mockingbird", "Pride and Prejudice"]
  },
  {
    "id": 1,
    "firstName": "Daisy",
    "lastName": "Stemm",
    "books": ["Harry Potter and the Sorcerer's Stone", "The Hunger Games", "The Book Thief"]
  }
];

const MembersBooksMethods = {

  getMember: function (memberFirstName, memberLastName) {
    return MembersBooksDatabase.find(member => member.firstName === memberFirstName && member.lastName === memberLastName);
  },
  getCheckedOutBooks: function (memberFirstName, memberLastName) {
    return this.getMember(memberFirstName, memberLastName).books;
  },
  memberCheckOutBook: function (memberFirstName, memberLastName, book) {
    //console.log(library.availableBooks());
    library.checkOutBook(book);
    // console.log(library.availableBooks());
    this.getMember(memberFirstName, memberLastName).books.push(book);
  }
}

export default MembersBooksMethods;
If you want to use what's being exported from another module in your current module, you must import it. The import statement at the top of this module imports whatever is being exported from library.js and puts it in the variable library which you can then use throughout this module. If you remember, an object with four methods was exported from library.js. This means that library should contain an object with four methods. Try console logging to see the value. Essentially, the import statement is saying give me what was exported from a certain file(library.js) and put in this variable(library) so I can use it in the scope of this module(libraryMembers.js).

main.js

/*
    Purpose:
    This code is where a member, Rose, checks out a book.
*/

import libraryMembers from "./libraryMembers.js"

let booksRose = libraryMembers.getCheckedOutBooks("Rose","Thorne");
console.log("Rose's Books: ", booksRose);

libraryMembers.memberCheckOutBook("Rose","Thorne", "The Little Prince");
console.log("Rose's Books: ", booksRose);