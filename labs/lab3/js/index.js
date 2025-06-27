function renderTable(data) {
    const tbody = document.getElementById('productTableBody');
    tbody.innerHTML = '';
    data.forEach((item, idx) => {
        tbody.innerHTML += `
        <tr>
            <td>${idx + 1}</td>
            <td class="text-left">${item.name}</td>
            <td>${item.status}</td>
            <td>
                <button class="btn btn-info btn-sm mr-1" title="View" onclick="showProductModal(${item.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                    </svg>
                </button>
                <button class="btn btn-warning btn-sm mr-1" title="Edit" onclick="showEditProductModal(${item.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                </button>
                <button class="btn btn-danger btn-sm" title="Delete" onclick="showDeleteProductModal(${item.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                </button>
            </td>
        </tr>
        `;
    });
}

function showProductModal(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        document.getElementById('modalProductName').textContent = product.name;
        document.getElementById('modalProductPrice').textContent = product.price;
        document.getElementById('modalProductStatus').textContent = product.status;
        $('#productModal').modal('show');
    }
}

function showEditProductModal(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        document.getElementById('editProductId').value = product.id;
        document.getElementById('editProductName').value = product.name;
        document.getElementById('editProductPrice').value = product.price.replace('$', '');
        document.getElementById('editProductStatus').value = product.status;
        $('#editProductModal').modal('show');
    }
}

function showDeleteProductModal(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        $('#showDeleteProductModal').modal('show');
    }
}

function addProductModal() {
    $('#addProductModal').modal('show');
}

const products = [
    { id: 1, name: "Laptop Dell XPS", price: "$1200", status: "In Stock" },
    { id: 2, name: "iPhone 14 Pro", price: "$999", status: "Out of Stock" },
    { id: 3, name: "Samsung Galaxy S22", price: "$899", status: "In Stock" },
    { id: 4, name: "MacBook Air M2", price: "$1100", status: "In Stock" },
    { id: 5, name: "Sony WH-1000XM5", price: "$399", status: "Out of Stock" },
    { id: 6, name: "Apple Watch Series 8", price: "$429", status: "In Stock" },
    { id: 7, name: "Dell Ultrasharp Monitor", price: "$499", status: "In Stock" },
    { id: 8, name: "HP Pavilion Gaming Laptop", price: "$850", status: "Out of Stock" },
    { id: 9, name: "Logitech MX Master 3", price: "$99", status: "In Stock" },
    { id: 10, name: "Razer BlackWidow Keyboard", price: "$129", status: "In Stock" },
    { id: 11, name: "Bose QuietComfort 45", price: "$329", status: "In Stock" },
    { id: 12, name: "GoPro Hero 11", price: "$499", status: "Out of Stock" },
    { id: 13, name: "Canon EOS R5", price: "$3899", status: "In Stock" },
    { id: 14, name: "Nikon Z9", price: "$5499", status: "Out of Stock" },
    { id: 15, name: "PlayStation 5", price: "$499", status: "In Stock" },
    { id: 16, name: "Xbox Series X", price: "$499", status: "In Stock" },
    { id: 17, name: "Nintendo Switch OLED", price: "$349", status: "Out of Stock" },
    { id: 18, name: "Apple iPad Pro 12.9", price: "$1099", status: "In Stock" },
    { id: 19, name: "Samsung Galaxy Tab S8", price: "$799", status: "In Stock" },
    { id: 20, name: "DJI Mavic 3", price: "$2049", status: "Out of Stock" },
];

renderTable(products);

document.getElementById('searchInput').addEventListener('input', function () {
    const value = this.value.trim().toLowerCase();
    renderTable(products.filter(p => p.name.toLowerCase().includes(value)));
});