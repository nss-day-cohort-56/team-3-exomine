import { getMineralFacs, getTransient, getMinerals } from "./database.js"
//  need transient, minerals, minerFac from data 
// .filter for mathcing facilty id array
// filteredArray.map 
// for of iterating through minerals
// return radio button html with mineral.name and minfac.quantity
// 

export const facilityStockHTML = () => {
    const transient = getTransient()
    const minerals = getMinerals()
    const mineralFacilities = getMineralFacs()
    const filteredFacilityMinerals = mineralFacilities.filter(facilityMineral => facilityMineral.facilityId === transient.selectedFacility)

    let html = "<h2> Available Minerals</h2>"
        html += "<ul>"
    const mineralStockArray = filteredFacilityMinerals.map(
        (facilityMineral) => {
            for (const mineral of minerals) {
                if (facilityMineral.mineralId === mineral.id) {
                    return `<li> <input type="radio" name"mineral" value="${mineral.id}"/> ${mineral.name} ${facilityMineral.quantity}</li>`
                }
            }
        })
    html += mineralStockArray.join("")
    html += "</ul>"
    return html
}
