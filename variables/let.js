
var global=30
function calculationA(){
    let a=4
    let b=9
    const sum=a*b
    console.log(sum);
    function calculationB() {
        let c=2
        const sum=c+b
        console.log(sum);
    }
    calculationB()
}

calculationA()

function globals() {
   console.log(global); 
}
globals()