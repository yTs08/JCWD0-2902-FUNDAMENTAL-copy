const contoh2 = new Promise((resolve, reject)=> {
    resolve("berhasil!")
    reject("gagal!")
});
const result = async () => await contoh2.then((res)=> res). catch((err)=> err); // berhasil atau gagal

const test = async () => console.log(contoh2.finally() )


