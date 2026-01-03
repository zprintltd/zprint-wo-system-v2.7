/*************************************************
 ZPRINT SEARCH – v2.7
 Compatible with v2.6 backend contract
*************************************************/

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkE9WHkiSqjMZBZsUYIF0BH3ivgbevnYzjqFzvCo0d-gBkje-_-fCwZmOs8vOtAxhO/exec";

/* =========================
   SEARCH
========================= */
function searchWO() {

  const params = new URLSearchParams({
    action: "searchWO",
    client: document.getElementById("client").value,
    phone: document.getElementById("phone").value,
    status: document.getElementById("status").value,
    dateFrom: document.getElementById("dateFrom").value,
    dateTo: document.getElementById("dateTo").value,
    woFrom: document.getElementById("woFrom").value,
    woTo: document.getElementById("woTo").value
  });

  fetch(`${SCRIPT_URL}?${params.toString()}`)
    .then(res => res.json())
    .then(renderResults)
    .catch(err => {
      console.error(err);
      alert("Search failed. Check Apps Script deployment.");
    });
}

/* =========================
   RENDER RESULTS (ARRAY)
========================= */
function renderResults(data) {

  const container = document.getElementById("results");
  container.innerHTML = "";

  if (!Array.isArray(data)) {
    container.innerHTML = "<p>Invalid response from server.</p>";
    return;
  }

  if (data.length === 0) {
    container.innerHTML = "<p>No records found.</p>";
    return;
  }

  data.forEach(r => {
    const card = document.createElement("div");
    card.className = "wo-card";

    card.innerHTML = `
      <div class="wo-header">
        <span class="wo-number">WO${r.wo}</span>
        <span class="wo-status">${r.status}</span>
      </div>

      <div class="wo-line">
        <span class="label">Date</span>
        <span class="value">${r.date}</span>
      </div>

      <div class="wo-line">
        <span class="label">Client</span>
        <span class="value">${r.client}</span>
      </div>

      <div class="wo-line">
        <span class="label">Category</span>
        <span class="value">${r.category}</span>
      </div>

      <div class="wo-actions">
        <button onclick="printSingle('${r.wo}')">PRINT</button>
      </div>
    `;

    container.appendChild(card);
  });
}

/* =========================
   SINGLE PRINT
========================= */
function printSingle(wo) {
  window.open(`${SCRIPT_URL}?action=printSingle&wo=${wo}`, "_blank");
}
