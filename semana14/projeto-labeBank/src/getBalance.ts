import { getAllAccounts } from "./accounts"
import { Account } from "./types"

var colors = require('colors/safe')

const getBalance = (name: string, cpf: string): void => {
    const accountsArray: Account[] = getAllAccounts()
    
    const accountIndex: number = accountsArray.findIndex(
        (costumer => costumer.name === name && costumer.cpf === Number(cpf)) 
    )
   
    if (accountIndex !== -1) {
        const balance: number = accountsArray[accountIndex].balance
        console.log(`Conta de ${accountsArray[accountIndex].name}\nSaldo: ${balance.toFixed(2)}`)
        return
    } else {
        console.log(colors.red("Dados inválidos"))
        return
    }
}






