

function highlight() {
    //Write your code here
	const sTag = document.querySelectorAll("strong");
	sTag.forEach((item)=>{
		item.style.color = "rgb(0,128,0)";
	});
}


function return_normal() {
	const sTag = document.querySelectorAll("strong");
	sTag.forEach((item)=>{
		item.style.color = "rgb(0,0,0)";
	});
}
