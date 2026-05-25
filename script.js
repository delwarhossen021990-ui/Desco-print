async function getReceipt(){

const meter =
document.getElementById("meter").value;

const result =
document.getElementById("result");

result.innerHTML = "Loading...";

try{

const response =
await fetch(
"https://desco-backend-xx3z.onrender.com/receipt/" + meter
);

const data = await response.json();

result.innerHTML = "";

data.forEach(item=>{

const div = document.createElement("div");

div.className = "card";

div.innerHTML = `
<h3>${item.amount} TK</h3>

<p>
Name: ${item.name}
</p>

<p>
Meter: ${item.meter}
</p>

<p>
Token:
${item.token}
</p>

<button onclick='printReceipt(${JSON.stringify(item)})'>
Print
</button>
`;

result.appendChild(div);

});

}catch(e){

result.innerHTML = "Failed";

}

}

function printReceipt(item){

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
