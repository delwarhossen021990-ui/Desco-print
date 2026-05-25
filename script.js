async function getReceipt() {

const meter =
document.getElementById("meter").value;

const result =
document.getElementById("result");

result.innerHTML = "Loading...";

try {

const response = await fetch(
"https://desco-backend-xx3z.onrender.com/receipt/" + meter
);

if (!response.ok) {
throw new Error("Fetch failed");
}

const data = await response.json();

result.innerHTML = "";

data.forEach(item => {

const div = document.createElement("div");

div.className = "card";

div.innerHTML = `
<h3>${item.amount} TK</h3>

<p>
<b>Name:</b> ${item.name}
</p>

<p>
<b>Meter:</b> ${item.meter}
</p>

<p>
<b>Token:</b>
${item.token}
</p>

<button onclick='printReceipt(${JSON.stringify(item)})'>
Print
</button>
`;

result.appendChild(div);

});

} catch (e) {

console.log(e);

result.innerHTML = `
<div style="color:red;font-size:20px;">
Failed To Fetch Receipt
</div>
`;

}

}

function printReceipt(item) {

const text = `
DESCO

Date:
${item.date}

Name:
${item.name}

Meter:
${item.meter}

Amount:
${item.amount}

TOKEN:
${item.token}
`;

window.location.href =
"rawbt:base64," + btoa(text);

}

console.log("UPDATED");
