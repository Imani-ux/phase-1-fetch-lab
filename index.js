function fetchBooks() {
  // Fetch the data from the API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) // Convert the response to JSON
    .then((books) => renderBooks(books)) // Pass the data to renderBooks
    .catch((error) => console.error("Error fetching books:", error)); // Error handling
}

// This function is already provided in the lab (don't change it unless needed)
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

// Call fetchBooks when the page loads (this is already done in index.html)
fetchBooks();