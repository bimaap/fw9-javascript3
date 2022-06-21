const getMonth = (cb) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember']
        if(!error){
            cb(null, month)
        }else{
            cb(new Error('Sorry data not Found', []))
        }
    }, 4000)
}

getMonth((result, month) => {
    if(result === null){
        month.map(e => {
            console.log(e)
        });
    }else{
        console.log(result.message);
    }
})