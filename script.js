const sTag = document.querySelectorAll("strong");

function highlight() {
    //Write your code here
	sTag.forEach(iteams,()=>{
		iteams.style.color = rgb(0,128,0);
	});
}


function return_normal() {
	sTag.forEach(iteams,()=>{
		iteams.style.color = rgb(0,0,0);
	});
}
