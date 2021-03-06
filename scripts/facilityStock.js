import { getMineralFacs, getTransient, getMinerals, setMineral } from "./database.js"
//  need transient, minerals, minerFac from data 
// .filter for mathcing facilty id array
// filteredArray.map 
// for of iterating through minerals
// return radio button html with mineral.name and minfac.quantity
// 
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "mineralOptions") {
            setMineral(parseInt(changeEvent.target.value))

        }
    }
)

// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "mineralOptions") {
//             cartHTML(changeEvent.target.value)

//         }
//     }
// )

export const facilityStockHTML = () => {
    const mineralFacilities = getMineralFacs()
    const transient = getTransient()
    const minerals = getMinerals()
    const filteredFacilityMinerals = mineralFacilities.filter(facilityMineral => facilityMineral.facilityId === transient.selectedFacility)

    let html = ""
    if (transient.selectedFacility === undefined) {
        html += '<h2>Facility Minerals</h2>'
    }
    else if (transient.selectedFacilityName !== undefined) {
        html += `<h2>Facility Minerals for ${transient?.selectedFacilityName}</h2>`
    const mineralStockArray = filteredFacilityMinerals.map(
        (facilityMineral) => {
            for (const mineral of minerals) {
                if (facilityMineral.mineralId === mineral.id) {
                    if (facilityMineral.quantity !== 0) {
                        return `<div> <input id="mineralOptions"type="radio" name"mineral"  ${facilityMineral.id === transient.selectedMineral? "checked": "" } value="${facilityMineral.id}"/>${facilityMineral.quantity} tons of ${mineral.name} </div>`
                    }
                }
            }
        })
    html += mineralStockArray.join("")
    }
    // html += "</ul>"
    return html
}
