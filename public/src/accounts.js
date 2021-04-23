function findAccountById(accounts, id) {
  let account = {};
  for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].id === id) {
          account = accounts[i];
      }
  }
  return account;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, AccountB)=>
  accountA.name.last.toLowerCase() > AccountB.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
    const borrows = books.reduce((acc, current) => {
   return acc + current.borrows.filter(item => item.id === account.id).length;
    }, 0);
    return borrows;
}


function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  let borrowMatch = [];
  books.forEach((item) => {
    const borrowed = item.borrows;
    const book = {
      id: item.id,
      title: item.title,
      genre: item.genre,
      authorId: item.authorId,
      author: {},
      borrows: {}
    };
    const {id, title, genre, authorId, author, borrows} = book;

    borrowed.forEach((borrow) => {
      if (borrow.id === account.id && borrow.returned === false) {
        result.push(book); 
        borrowMatch.push(borrow);
        book.borrows = borrowMatch;
        book.author = authors.filter(auth => auth.id === book.authorId)[0];
      }
    });
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
