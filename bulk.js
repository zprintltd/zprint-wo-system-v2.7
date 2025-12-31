const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkE9WHkiSqjMZBZsUYIF0BH3ivgbevnYzjqFzvCo0d-gBkje-_-fCwZmOs8vOtAxhO/exec";

function bulkPrint() {

  const msg = document.getElementById("msg");
  msg.style.color = "black";
  msg.textContent = "Processing bulk print…";

  const params = new URLSearchParams({
    action: "bulkPrint",
    status: document.getElementById("status").value,
    dateFrom: document.getElementById("dateFrom").value,
    dateTo: document.getElementById("dateTo").value,
    woFrom: document.getElementById("woFrom").value,
    woTo: document.getElementById("woTo").value,
    client: document.getElementById("client").value,
    phone: document.getElementById("phone").value
  });

  fetch(`${SCRIPT_URL}?${params}`)
    .then(res => res.json())
    .then(data => {

      if (!data.success) {
        msg.style.color = "red";
        msg.textContent = data.message || "No records found.";
        return;
      }

      msg.style.color = "green";
      msg.textContent =
        `Generated ${data.count} job cards. Opening document…`;

      window.open(data.docUrl, "_blank");
    })
    .catch(err => {
      console.error(err);
      msg.style.color = "red";
      msg.textContent = "Bulk print failed. Check console.";
    });
}
