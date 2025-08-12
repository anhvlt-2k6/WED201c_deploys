const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', function () {
    if (searchInput.value.trim() === '') {
        alert('Please enter a book title or author');
    } else {
        alert('Searching for results...');
        //  In a real application, you would perform the search here
    }
});

const bookItems = document.querySelectorAll('.book-item');
const bookDetail = document.getElementById('book-detail');
const closeDetail = document.getElementById('close-detail');

// Function to calculate total price
function calculateTotalPrice() {
    const quantity = parseInt(quantityInput.value);
    const price = parseFloat(pricePerBook.textContent.replace('$', '')); // Remove '$' sign

    if (!isNaN(quantity) && !isNaN(price)) {
        const total = quantity * price;
        totalPriceDisplay.textContent = '$' + total.toFixed(2); // Format to 2 decimal places
    } else {
        totalPriceDisplay.textContent = 'Invalid input';
    }
}

// Get calculator elements
const quantityInput = document.getElementById('quantity');
const pricePerBook = document.getElementById('price-per-book');
const calculateButton = document.getElementById('calculate-button');
//REQUIREMENT 4
const totalPrice = document.getElementById('total-price');
var pricePB;
// Function to show book details
function showBookDetail(event) {
    const clickedBook = event.currentTarget; // Get the clicked book item

    // Extract details from the clicked book item
    const imageSrc = clickedBook.querySelector('img').src;
    const title = clickedBook.querySelector('h3').textContent;
    const author = clickedBook.querySelector('.author') ? clickedBook.querySelector('.author').textContent : 'Unknown Author'; // Handle cases where author might not exist
    const price = clickedBook.querySelector('.price').textContent;
    const description = clickedBook.querySelector('.book-description') ? clickedBook.querySelector('.book-description').textContent : 'No description available.'; // Handle cases where description might not exist

    // Populate the detail section
    bookDetail.querySelector('.book-detail-image img').src = imageSrc;
    bookDetail.querySelector('.book-detail-info h2').textContent = title;
    bookDetail.querySelector('.book-detail-info .author').textContent = author;
    bookDetail.querySelector('.book-detail-info .price').textContent = price;
    bookDetail.querySelector('.book-detail-info .description').textContent = description;

    // Populate price per book in calculator
    //REQUIREMENT 4
    pricePerBook.innerHTML = price;
    pricePB = price;
    bookDetail.style.display = 'block'; // Show the detail section
}

// Function to hide book details
function hideBookDetail() {
    bookDetail.style.display = 'none';
}

// Add click event listeners to each book item
bookItems.forEach(item => {
    item.addEventListener('click', showBookDetail);
});

// Add click event listener to the close button
closeDetail.addEventListener('click', hideBookDetail);


// Add event listener to the calculate button
//REQUIREMENT 4
calculateButton.addEventListener('click', calculcatePrice);

function calculcatePrice() {
    var quan = parseInt(quantityInput.value);
    var pircePerB = parseFloat(pricePB.replace("$", ""));
    
    var total = quan * pircePerB;
    if (total != null && !isNaN(total)) {
        totalPrice.innerHTML = "$" + `${total}`;
    } else {
        totalPrice.innerHTML = "Invalid Input";
    }
}