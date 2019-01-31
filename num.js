let array 
var max
let MAX = process.openStdin()
MAX.addListener("data", (d) => {
    array = d.toString().trim()
for(let i=0;i<array.length;i++){
	if(i==0){
		max = array[0];
	}
	if (array[i]> max) {
		max = array[i]
	}}
 console.log(max)
 MAX.destroy()
})