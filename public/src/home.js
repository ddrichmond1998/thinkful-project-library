function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let counter=0;
  for (let i=0; i<books.length; i++) {
    for (let j=0; j < books[i].borrows.length; j++) {
  if (books[i].borrows[j].returned === false) {
    counter+=1
  }
  }
}
  return counter;
}

function getMostCommonGenres(books) {
  const count1= books.reduce((tally, book)=> 
  {
   tally[book.genre]= (tally[book.genre] || 0) + 1;
   return tally;
  } , {});
  
  // Step 2  Format list into an array of key value pairs
  const class1=[];
  for (let count in count1) 
  {
    class1.push({name:count,
    count: count1[count]})
  }
  // Step 3 Sort formatted list descending order
  class1.sort((a, b) => {
    return b.count - a.count;
  }); 
  // Step 4  return top 5
  const final = [];
  for (let i=0; i < 5; i++){
    final.push(class1[i]);
  }
  return final;
}

function getMostPopularBooks(books) { 
  let popularBooks=[]; 
  books.forEach((book) => { popularBooks.push({name:book.title, count:book.borrows.length}) }) 
  const sortedBooks = popularBooks.sort((book1, book2) => book1.count < book2.count ? 1: -1) 
  return sortedBooks.slice(0,5) }

  function getMostPopularAuthors(books, authors) {
    let countObj = {};
   books.forEach(book => {
     if (!countObj[book.authorId]) {
       countObj[book.authorId] = book.borrows.length;
     } else {
       countObj[book.authorId] += book.borrows.length;
     } 
   })
   let countArray = [];
   for (let [authorId, totalBorrows] of Object.entries(countObj)) {
     const author = authors.find((author) => parseInt(authorId) === author.id)
     countArray.push({
       name: `${author.name.first} ${author.name.last}`,
       count: totalBorrows
     });
   }
     countArray.sort((a,b) => b.count - a.count);
     return countArray.slice(0, 5);
  }




module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
