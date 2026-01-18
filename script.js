function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return false;
  }
  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}

// Load XML data (e.g., on home page)
document.addEventListener("DOMContentLoaded", () => {
  fetch("data/places.xml")
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, "application/xml");
      const places = xml.getElementsByTagName("place");
      const container = document.createElement("div");

      for (let i = 0; i < places.length; i++) {
        const name = places[i].getElementsByTagName("name")[0].textContent;
        const country = places[i].getElementsByTagName("country")[0].textContent;
        const div = document.createElement("div");
        div.textContent = `${name}, ${country}`;
        container.appendChild(div);
      }

      document.body.appendChild(container);
    });
});
