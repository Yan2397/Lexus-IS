let arr = document.querySelectorAll(".color>img")
console.log(arr)
for  (let i=0;i<arr.length;i++){
	arr[i].addEventListener("click",change)
}

function change(){
	console.log('car'+ this.src.substring(this.src.lastIndexOf(".")-1))
	im1.src='car'+ this.src.substring(this.src.lastIndexOf(".")-1)

}
