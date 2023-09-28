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
	para.remove();
	const h1=document.createElement("h1");
	h1.innerText="Entered Metaverse";
	main.append(h1,button);
	
}
const clickbtn=document.getElementById("enterBtn");
enterBtn.onclick=changing;



