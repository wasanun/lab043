var Num
let Grade = process.openStdin()
Grade.addListener("data", (d) => {
    Num = d.toString().trim()


	if(Num > 79){
        console.log("Grade : A ");
    }
    if (Num < 50){
        console.log("Grade : E ");
    }
    if (Num > 69 && 75> Num){
        console.log("Grade : B ");
    }
     if (80> Num && Num > 74){
        console.log("Grade : B+ ");
    }
    if (65> Num && Num > 59){
        console.log("Grade : C ");
    }
     if (70 > Num && Num > 64){
        console.log("Grade : C+ ");
    }
     if (55 > Num && Num > 49){
        console.log("Grade : D ");
    }
     if (60 > Num && Num > 54){
        console.log("Grade : D+ ");
    }
Grade.destroy()
//Even.end()
})