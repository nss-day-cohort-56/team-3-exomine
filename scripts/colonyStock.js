import { getColonyStocks, getMinerals, getTransient } from "./database.js";



/*
create epoortable function to render colonyStock quantity and name
export const colonyHTML = () => {
    const transient = getTransient()
    const colonies = getColonies()
    let html = ""
    if (transient.selectedGovernorColony === undefined) {
        html += '<h2 class="colonyDisplay">Colony Minerals</h2>'
    }
    else for (const colony of colonies) {
        if (transient.selectedGovernorColony === colony.id) {
            html += `<h2 class="colonyDisplay"> ${colony.name} Minerals</h2>`
        }
    }
    return html
}
need to get colonyStock.Id similar to colonyStock.colonyID
two nested for loops cStock of cStocks, for mineral of minerals
If colonyStock.colonyId = trans.selGovCol >>>> quantity
if colonyStock.mineralId = mineral.id, display mineral.name
if colonyStock.colonyId = transient.selectyedGovernorColony


first thing we need to access: colonyStock.colonyId = transient.selectyedGovernorColony
then, iterate through colonyStock.colonyId's that return (.find?) 
if .find locates colonyStocks


*/

export const colonyStockHTML = () => {
    const transient = getTransient()
    const minerals = getMinerals()
    const colonyStocks = getColonyStocks()
    const filteredColonyStocks = colonyStocks.filter(colonyStock => colonyStock.colonyId === transient.selectedGovernorColony)

    let html = ""

    const colonyStockArray = filteredColonyStocks.map(
        (colonyStock) => {
            for (const mineral of minerals) {
                if (colonyStock.mineralId === mineral.id) {
                    return `<div>${colonyStock.quantity} tons of ${mineral.name} </div>`
                }
            }
        })
    html += colonyStockArray.join("")
    return html
}




// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }