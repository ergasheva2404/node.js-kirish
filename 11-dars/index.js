const fs = require("fs")
const path = require("path")

// fs.writeFileSync(path.join(__dirname , "src" , "database" , "income.json"), "[]")
// fs.writeFileSync(path.join(__dirname , "src", "database" , "expense.json"), "[]") 

let incomeFile = path.join(__dirname, "src", "database", "income.json")
let expenseFile = path.join(__dirname, "src", "database", "expense.json")

// incomes

let fileName = process.argv[2]
let request = process.argv[3]

if (fileName === "income" && request === "GET") {
    let data = JSON.parse(fs.readFileSync(incomeFile, "utf-8"))
    console.table(data);
}

if (fileName === "income" && request === "POST") {
    let amount = process.argv[4]
    let purpose = process.argv[5]
    let data = JSON.parse(fs.readFileSync(incomeFile, "utf-8"))

    let lastId = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].id > lastId) {
            lastId = data[i].id
        }
    }

    let newData = {
        id: lastId + 1,
        amount: +amount,
        purpose: purpose
    }
    data.push(newData)
    fs.writeFileSync(incomeFile, JSON.stringify(data, null, 4))
    console.log("Yangi income qo'shildi:");
    console.table(newData);
}

if (fileName === "income" && request === "DELETE") {
    let id = Number(process.argv[4])

    let data = JSON.parse(fs.readFileSync(incomeFile, "utf-8"))

    let newIncomes = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].id !== id) {
            newIncomes.push(data[i])
        }
    }

    fs.writeFileSync(incomeFile, JSON.stringify(newIncomes, null, 4))
    console.log("O'chirildi");
    console.table(newIncomes);

}

if (fileName === "income" && request === "PUT") {
    let id = Number(process.argv[4])
    let newAmount = process.argv[5]
    let newPurpose = process.argv[6]

    let data = JSON.parse(fs.readFileSync(incomeFile, "utf-8"))

    for (let i = 0; i < data.length; i++) {

        if (data[i].id === id) {

            if (newAmount) {
                let amountIndex = newAmount.split("=")
                data[i].amount = Number(amountIndex[1])
            }
            if (newPurpose) {
                let purposeIndex = newPurpose.split("=")
                data[i].purpose = purposeIndex[1]
            }
        }

    }

    fs.writeFileSync(incomeFile, JSON.stringify(data, null, 4))
    console.log("Yangilandi: ", id);
    console.table(data);

}

// expenses

if (fileName === "expense" && request === "GET") {
    let data = JSON.parse(fs.readFileSync(expenseFile, "utf-8"))
    console.table(data);
}

if (fileName === "expense" && request === "POST") {
    let amount = process.argv[4]
    let purpose = process.argv[5]
    let data = JSON.parse(fs.readFileSync(expenseFile, "utf-8"))

    let lastId = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].id > lastId) {
            lastId = data[i].id
        }
    }

    let newData = {
        id: lastId + 1,
        amount: +amount,
        purpose: purpose
    }
    data.push(newData)
    fs.writeFileSync(expenseFile, JSON.stringify(data, null, 4))
    console.log("Yangi expense qo'shildi:");
    console.table(newData);
}

if (fileName === "expense" && request === "DELETE") {
    let id = Number(process.argv[4])

    let data = JSON.parse(fs.readFileSync(expenseFile, "utf-8"))

    let newExpenses = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].id !== id) {
            newExpenses.push(data[i])
        }
    }

    fs.writeFileSync(expenseFile, JSON.stringify(newExpenses, null, 4))
    console.log("O'chirildi");
    console.table(newExpenses);
}

if (fileName === "expense" && request === "PUT") {
    let id = Number(process.argv[4])
    let newAmount = process.argv[5]
    let newPurpose = process.argv[6]

    let data = JSON.parse(fs.readFileSync(expenseFile, "utf-8"))

    for (let i = 0; i < data.length; i++) {

        if (data[i].id === id) {

            if (newAmount) {
                let amountIndex = newAmount.split("=")
                data[i].amount = Number(amountIndex[1])
            }
            if (newPurpose) {
                let purposeIndex = newPurpose.split("=")
                data[i].purpose = purposeIndex[1]
            }
        }

    }

    fs.writeFileSync(expenseFile, JSON.stringify(data, null, 4))
    console.log("Yangilandi: ", id);
    console.table(data);

}

// balance

if (fileName === "balance") {
    let incomes = JSON.parse(fs.readFileSync(incomeFile, "utf-8"))
    let expenses = JSON.parse(fs.readFileSync(expenseFile, "utf-8"))

    let totalIncomes = 0
    for (let i = 0; i < incomes.length; i++) {
        totalIncomes = totalIncomes + incomes[i].amount
    }
    let totalExpenses = 0
    for (let i = 0; i < expenses.length; i++) {
        totalExpenses = totalExpenses + expenses[i].amount
    }

    let balance = totalIncomes - totalExpenses

    console.table({
        "Umumiy daromad": totalIncomes,
        "Umumiy harajat": totalExpenses,
        "Balans": balance
    });

    if (request === "--more") {
        console.log("Daromadlar:");
        console.table(incomes);

        console.log("Harajatlar:");
        console.table(expenses);

    }
}




