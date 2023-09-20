const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function per(){
    rl.question('Write first number ', (num1)=>{
        rl.question('Write second number ', (num2)=>{
            rl.question('Write third number ', (num3)=>{
                rl.question('Write X ', (num4)=>{
            num1 = parseFloat(num1)
            num2 = parseFloat(num2)  
            num3 = parseFloat(num3)   
            num4 = parseFloat(num4)   
            numkv = num4*num4        
            let P = num1 *num4 + num2 *num4 + num3
            P = (num1 *numkv + num2 *num4 + num3)/P
            console.log(P)

            rl.close()
        })
    })
})
})
}

per()