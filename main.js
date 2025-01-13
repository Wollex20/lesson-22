fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("users-container");

    data.forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
          `;

      container.appendChild(card);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

console.log("hello");