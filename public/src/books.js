const { getBooksPossessedByAccount } = require("./accounts");

function findAuthorById(authors, id) {
  for (let i=0; i<authors.length; i++) {
    if (authors[i].id === id) {
      return authors[i]
    }
  }
}

function findBookById(books, id) {
  for (let i=0; i<books.length; i++) {
    if (books[i].id === id) {
      return books[i];
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  let partitioned=[];
  let partitionedFalse = [];
  let partitionedTrue = [];
  for (let i=0; i<books.length; i++) {
    let book=books[i];
    if (book.borrows[0].returned === false) {
      partitionedFalse.push(book)
    } 
    else {
        partitionedTrue.push(book)
    }
    }
    partitioned.push(partitionedFalse);
    partitioned.push(partitionedTrue);
    return partitioned;
  }
   
function getBorrowersForBook(book, accounts) {
  let accountInfos = [];
  for (let i = 0; i < accounts.length; i++) {
  let accounts1 = accounts[i];
  for (let j=0; j < book.borrows.length; j++)
{
  if (book.borrows[j].id == accounts1.id) {
  let accountInfo = { id: book.borrows[j].id, returned: book.borrows[j].returned, picture: accounts1.picture, age: accounts1.age, name:accounts1.name, company:accounts1.company, email: accounts1.email, registered: accounts1.registered };
  accountInfos.push(accountInfo)
 }
}
 }
          return accountInfos.slice(0,10);
}

    

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
