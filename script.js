 const main=document.body;
const p=document.createElement("p");
p.innerText="Enter the Metaverse";
p.id="status";
const button=document.createElement("button");
button.id="enterBtn";
button.innerText="Enter";
main.append(p,button);

function changing(){
	const para=document.getElementById("status");
	
	para.innerText="";
	const h1=document.createElement("h1");
	
	h1.innerText="Entered Metaverse";
	para.appendChild(h1);
	
	
}
const clickbtn=document.getElementById("enterBtn");
clickbtn.onclick=changing;



