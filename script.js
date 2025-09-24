const phoneNumber = "+919920603111"; // replace with your WhatsApp number

// Load products.json
fetch("products.json")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("products");

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition";

      // Construct WhatsApp message including image
      const whatsappMessage = `Hello, I want to order:\n${product.name} - $${product.price}\nImage: https://yourusername.github.io/my-shop/${product.img}`;

      card.innerHTML = `
        <img src="${product.img}" alt="${product.name}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-semibold text-gray-800">${product.name}</h3>
          <p class="text-gray-600 mb-3">$${product.price}</p>
          <a class="inline-block w-full text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
             href="https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}"
             target="_blank">
             Order via WhatsApp
          </a>
        </div>
      `;

      container.appendChild(card);
    });
  });
