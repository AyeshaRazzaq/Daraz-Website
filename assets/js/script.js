// Function to create and show the offcanvas when the cart icon is clicked
document.getElementById("btn").onclick = function () {
    createOffcanvas();
};

function createOffcanvas() {
    let offcanvas = document.getElementById("offcanvas");
    if (!offcanvas) {
        // Check if offcanvas already exists
        offcanvas = document.createElement("div");
        offcanvas.className = "offcanvas offcanvas-end";
        offcanvas.tabIndex = "-1";
        offcanvas.id = "offcanvas";
        offcanvas.setAttribute("aria-labelledby", "offcanvasLabel");
        offcanvas.innerHTML = `
            <div class="offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <h4 class="text-center fw-bold pb-3">Your Cart</h4>
                <hr>
                <div id="cart-items"></div>
                <h5 class="js-head">Total $0.00</h5>
                <button type="submit" class="submit-js btn btn-primary text-white text-center" id="btn-submit">Buy Now</button>
            </div>
        `;
        document.body.appendChild(offcanvas);
    }
    
    // Show the offcanvas
    let offcanvasElement = new bootstrap.Offcanvas(offcanvas);
    offcanvasElement.show();

    // Order placed
    document.getElementById('btn-submit').onclick = function submit() {
        window.alert('Order Placed Successfully!');
        // Clear the cart
        const cartItemsContainer = document.getElementById('cart-items');
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';  // Remove all child elements
        }
        // Update the total price display to $0
        const totalElement = document.querySelector('.js-head');
        if (totalElement) {
            totalElement.textContent = 'Total $0.00';
        }
    };
}

// Function to add product element to the offcanvas without opening the offcanvas
function btnfunction(imgsrc, productname, price) {
    // Ensure the offcanvas and cart-items container exist
    let offcanvas = document.getElementById("offcanvas");
    if (!offcanvas) {
        // If offcanvas does not exist, create it without showing
        createOffcanvas();
    }

    const cartItemsContainer = document.getElementById('cart-items');
    
    // Create the product element
    const element = document.createElement('div');
    element.className = 'container d-flex justify-content-around align-items-center product-item';
    element.innerHTML = `
        <div>
            <img src="${imgsrc}" alt="${productname}" class="img-prod-offcanvas">
        </div>
        <div class="data flex-grow-1">
            <h5 class="fw-bold">${productname}</h5>
            <h5 class="price">$${price.toFixed(2)}</h5>
            <input type="number" value="1" min="1" class="form-control" onchange="updateTotal()">
        </div>
        <div>
            <button class="btn btn-remove" onclick="removeProduct(this)">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>`;
    // Append the new element to the offcanvas body
    cartItemsContainer.appendChild(element);
    
    // Update the total price after adding the item
    updateTotal();
}

// Function to remove the product
function removeProduct(button) {
    const productDiv = button.closest('.product-item');
    productDiv.remove();
    updateTotal(); // Call this to update the total after removing the product
}

// Function to update the total price
function updateTotal(){
    let total = 0;

    // Select all product items within cart-items
    const productitems = document.querySelectorAll('#cart-items .product-item');

    productitems.forEach(item => {
        // Get the price
        const priceText = item.querySelector('.price').textContent.trim().replace('$', '');
        const price = parseFloat(priceText);

        // Get the quantity
        const quantity = parseInt(item.querySelector('input[type="number"]').value);

        if (!isNaN(price) && !isNaN(quantity)) {
            total += price * quantity;
        }
    });
    
    // Update the total price display
    const totalElement = document.querySelector('.js-head');
    if (totalElement) {
        totalElement.textContent = `Total $${total.toFixed(2)}`;
    }
}

// Initialize product buttons
document.getElementById('btn-1').onclick = function () {
    btnfunction('assets/img/flash-sale 1.webp', 'Fitness Motorized', 106);
};
// Add the rest of your product button initializations here...

  document.getElementById('btn-2').onclick = function () {
      btnfunction('assets/img/flash-sale 2.webp', 'Wireless Airpods', 100);
  };
  document.getElementById('btn-3').onclick = function () {
    btnfunction('assets/img/flash-sale 5.webp', 'Acne Serum', 200);
};
document.getElementById('btn-4').onclick = function () {
    btnfunction('assets/img/flash-sale 4.webp', 'Hair Growth Oil', 250);
};
document.getElementById('btn-5').onclick = function () {
    btnfunction('assets/img/flash-sale 5.webp', 'Bluetooth', 300);
};
document.getElementById('btn-6').onclick = function () {
    btnfunction('assets/img/flash-sale 6.webp', 'HeadPhones', 199);
};
//
document.getElementById('btn-7').onclick = function () {
    btnfunction('assets/images/ct-1.webp', 'Messenger Bags', 2199);
};
document.getElementById('btn-8').onclick = function () {
    btnfunction('assets/img/ct-2.webp', 'Glasses', 199);
};
document.getElementById('btn-9').onclick = function () {
  btnfunction('assets/img/ct-1.webp', 'Messenger Bags', 2199);
};
document.getElementById('btn-10').onclick = function () {
  btnfunction('assets/img/ct-4.webp', 'Shopping Bag', 599);
};
document.getElementById('btn-11').onclick = function () {
  btnfunction('assets/img/ct-5.webp', 'Table', 2699);
};
document.getElementById('btn-12').onclick = function () {
  btnfunction('assets/img/ct-12.webp', 'Toys', 200);
};
document.getElementById('btn-13').onclick = function () {
    btnfunction('assets/images/ct-7.webp', 'XYZ', 219);
};
document.getElementById('btn-14').onclick = function () {
    btnfunction('assets/img/ct-2.webp', 'Pictures', 109);
};
document.getElementById('btn-15').onclick = function () {
  btnfunction('assets/img/ct-16.webp', 'Something', 1100);
};
document.getElementById('btn-16').onclick = function () {
  btnfunction('assets/img/ct-10.webp', 'Toy Car', 2776);
};
document.getElementById('btn-17').onclick = function () {
  btnfunction('assets/img/ct-11.webp', 'Machines', 679);
};
document.getElementById('btn-18').onclick = function () {
  btnfunction('assets/img/ct-12.webp', 'Toys', 200);
};
document.getElementById('btn-19').onclick = function () {
    btnfunction('assets/images/ct-13.webp', 'Towel', 1899);
};
document.getElementById('btn-20').onclick = function () {
    btnfunction('assets/img/ct-14.webp', 'Blah Blah', 999);
};
document.getElementById('btn-21').onclick = function () {
  btnfunction('assets/img/ct-15.webp', 'Soap', 1900);
};
document.getElementById('btn-22').onclick = function () {
  btnfunction('assets/img/ct-16.webp', 'Something', 1100);
};
//
document.getElementById('btn-23').onclick = function () {
  btnfunction('assets/img/fu-1.webp', 'Bluetooth', 695);
};
document.getElementById('btn-24').onclick = function () {
  btnfunction('assets/img/fu2.webp', 'Bags', 695);
};
document.getElementById('btn-25').onclick = function () {
    btnfunction('assets/img/fu3.webp', 'Mobile Cover', 695);
  };
  document.getElementById('btn-26').onclick = function () {
    btnfunction('assets/img/fu4.webp', 'Smart watch', 695);
  };
  document.getElementById('btn-27').onclick = function () {
    btnfunction('assets/img/fu5.webp', 'Umbrella', 695);
  };
  document.getElementById('btn-28').onclick = function () {
    btnfunction('assets/img/fu6.webp', 'Smart Watches', 695);
  };
  document.getElementById('btn-29').onclick = function () {
    btnfunction('assets/img/fu7.webp', 'Water Bottle', 695);
  };
  document.getElementById('btn-30').onclick = function () {
    btnfunction('assets/img/fu3.webp', 'Mobile Cover', 695);
  };
  document.getElementById('btn-31').onclick = function () {
    btnfunction('assets/img/fu4.webp', 'Smart Watch', 695);
  };
  document.getElementById('btn-32').onclick = function () {
    btnfunction('assets/img/fu5.webp', 'Bags', 695);
  };
  document.getElementById('btn-33').onclick = function () {
    btnfunction('assets/img/fu6.webp', 'Bluetooth', 695);
  };
  document.getElementById('btn-34').onclick = function () {
    btnfunction('assets/img/fu5.webp', 'Bags', 695);
  };