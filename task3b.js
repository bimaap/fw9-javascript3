const checkNumber = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof(num) === 'number'){
                resolve(num)
            }else{
                reject(new Error(`Data "${num}", tidak bertipe data number`))
            }
        }, 2000)
    })
}

const evalcheckNumber = async (num) => {
    try{
        const result = await checkNumber(num)
        console.log(`Data ${num}, bertipe data number`);
    }catch(err){
        console.log(err.message);
    }
}
evalcheckNumber(1)