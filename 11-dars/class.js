/* node js

npm => Node Package Manager

NodeJs Global objects:
1.Global
2. Process
3. SetTimeOut
4. SetInterval
5. console
6. __dirname
7. __filename

NodeJs built-in:

  1. fs:
fs.readFileSync => o'qish
fs.readFile => file o'qish callback bilan(eskirgan usul)
fs.writeFileSync file yaratish
fs.appendFileSync bor faylga ma'lumot qo'shish
fs.rmdirSync("src/database") // folder o'chirish 
fs.rmSync/fs.unlinkSync("") file o'chirish
fs.copyFileSync datani copy qilish fayldan faylga

  2. path
path.basename 
path.extname
path.join
path.normalize

*/
// const fs = require("fs")
// const path = require("path")
// fs.writeFileSync(path.join("src", "database", "users.json"), "salom")
// console.log(path.normalize("src//database//users.json"));


// path.join("src", "database", "users.json") faylni ichma ichma qo'shib beradi
// console.log(path.basename(__filename)); turgan faylimni nomini chiqairb beradi
// console.log(path.extname(__filename)); fayl nomini turini chiqarib beradi: html, js, css ..


// let [,,n, text] = process.argv
// console.log(n, text);

// console.log(__filename);
// console.log(__dirname);


// fs.unlinkSync("src/data.json")
// fs.accessSync()

// fs.copyFileSync("users.json", "src/data.json")

/* let users = fs.readFileSync("users.json", "utf-8") */

/* let users = fs.readFile("users.json", "utf-8", (err, data) => {
    if(err){
        console.log(err);
    } else{
        console.log(data);
        
    }
})
console.log(users); */

/* fs.mkdirSync("src/database") */
/* fs.writeFileSync("src/database/users.json", JSON.stringify( [{"name": "Ali", age: 23}], null, 4)) */
/* fs.appendFileSync("src/database/users.json", "salom") */
/* fs.rmdirSync("src/database") // folder o'chirish */
/* fs.rmSync("src/database/users.json") */

