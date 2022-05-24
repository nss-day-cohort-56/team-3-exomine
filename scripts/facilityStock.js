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

    let html = "<h2> Available Minerals</h2>"
    html += "<ul>"
    const mineralStockArray = filteredFacilityMinerals.map(
        (facilityMineral) => {
            for (const mineral of minerals) {
                if (facilityMineral.mineralId === mineral.id) {
                    if (facilityMineral.quantity !== 0) {
                        return `<li> <input id="mineralOptions"type="radio" name"mineral" value="${facilityMineral.id}"/>${facilityMineral.quantity} tons of ${mineral.name} </li>`
                    }
                }
            }
        })
    html += mineralStockArray.join("")
    html += "</ul>"
    return html
}
