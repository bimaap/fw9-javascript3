const checkAccount = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const accounts = {
                username: "bima",
                password: "12345b"
            }
            if(username === accounts.username && password === accounts.password){
                resolve(`Halo ${username}, anda berhasil login`)
            }else if(username !== accounts.username){
                reject(new Error('Username tidak ditemukan'))
            }else{
                reject(new Error('Password salah'))
            }
        }, 2000)
    })
}

checkAccount("bima", "12345b")
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error.message);
})