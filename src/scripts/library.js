/*
    Purpose:
    This file contains all code related to manipulating,
    or accessing all library books.
*/

const BooksDatabase = [
    {
        "id": 1,
        "title": "To Kill a Mockingbird",
        "author": "Nelle Harper Lee",
        "available": false
    },
    {
        "id": 2,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "available": false
    },
    {
        "id": 3,
        "title": "The Little Prince",
        "author": "Antoine de Saint-Exupéry",
        "available": true
    },
    {
        "id": 4,
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "available": false
    },
    {
        "id": 5,
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "available": false
    },
    {
        "id": 6,
        "title": "The Book Thief",
        "author": "Markus Zusak",
        "available": false
    },
    {
        "id": 7,
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J.K. Rowling",
        "available": true
    },
    {
        "id": 8,
        "title": "Catching Fire",
        "author": "Suzanne Collins",
        "available": true
    }
];

const BooksMethods = {
    getBook: function (bookTitle) {
        return BooksDatabase.find(book => book.title === bookTitle);
    },
    checkOutBook: function (bookTitle) {
        if (this.getBook(bookTitle).available) {
            this.getBook(bookTitle).available = false
        } else {
            throw "Book is currently unavailable";
        }
    },
    returnBook: function (bookTitle) {
        this.getBook(bookTitle).available = true;
    },
    availableBooks: function (bookTitle) {
        return BooksDatabase.filter(book => book.available === true);
    }
}

export default BooksMethods;