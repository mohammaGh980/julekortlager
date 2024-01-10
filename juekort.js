// Funksjon for å lage eit julekort med brukerens input
function createCard() {
  // Hent verdiene frå input-felta
  var title = document.getElementById("cardTitle").value;
  var text = document.getElementById("cardText").value;
  var from = document.getElementById("cardFrom").value;
  var to = document.getElementById("cardTo").value;
  var imageInput = document.getElementById("imageInput");
  var color = document.getElementById("colorPicker").value;

  // Les bildet frå input-feltet og vis det på kortet
  var image = imageInput.files[0];
  var reader = new FileReder();
  reader.onload = function (e) {
      var imageUrl = e.target.result;
      // Kall på funksjonen som viser kortet på skjermen
      displayCard(title, text, from, to, imageUrl, color);
      // Vis print-knappen
      document.getElementById("printButton").style.display = "block";
  };
  reader.readAsDataURL(image);
}

// Funksjon for å vise kortet på skjermen med HTML
function displayCard(title, text, from, to, imageUrl, color) {
  // Lag ein HTML-streng med kortets innhold
  var cardHTML = `
      <div style="background-color: ${color}; padding: 20px; border-radius: 10px; color: #fff;">
          <h1>${title}</h1>
          <p>${text}</p>
          <p>Med kjærlighet fra ${from} til ${to}</p>
          <img src="${imageUrl}" alt="Bilde" style="max-width: 100%; height: auto;">
      </div>
  `;
  // Sett HTML-strengen inn i result-diven
  document.getElementById("result").innerHTML = cardHTML;
}

// Funksjon for å printe kortet
function printCard() {
  // Hent HTML-strengen frå result-diven
  var printContent = document.getElementById("result").innerHTML;
  // Lagre den originale HTML-en frå body-elementet
  var originalContent = document.body.innerHTML;

  // Erstatt body-elementet med print-innholdet
  document.body.innerHTML = printContent;

  // Print siden
  window.print();

  // Sett tilbake den originale HTML-en i body-elementet
  document.body.innerHTML = originalContent;
}
