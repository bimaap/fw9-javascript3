const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dateDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dateDay.find((item) => {
                return item == day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

cekHariKerja("rabu")
.then((result) => {
    console.log(`Hari ${result} adalah hari kerja`);
})
.catch((error) => {
    console.log(error.message);
})

const evalHariKerja = async (day) => {
    try{
        const result = await cekHariKerja(day)
        console.log(`Hari ${result} adalah hari kerja`);
    }catch(err){
        console.log(err.message);
    }
}
evalHariKerja("minggu")