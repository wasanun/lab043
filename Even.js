var Num
let Even = process.openStdin()
Even.addListener("data", (d) => {
    Num = d.toString().trim()
    if(Num %2 == 0){
        console.log("Even");
        
    }
    else {
        console.log("Odd");
        
    }
    
   Even.end()
   //Even.destroy()
})