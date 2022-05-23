//need to get mineralId
/*
import: minerals, facilities and transient, mineralFacilities

Trying to add mineral name and facility name to cart. "Adamantium from Inner Planetary"

two for loops: facility of facilities, mineral of minerals

for the cart HTML, we need minFacID

create a function. Inside function, string should read "1 ton of ${mineral.name} from ${facility.name}"

we want each button click to add 1 unit to cart WITHOUT undoing previous clicks/rerendering HTML
pull structure 

can .find accept 2 parameters?

let foundMineral = mineral.find()

like buildORderListitem structure

    */
import { getFacilities, getMineralFacs, getMinerals, getTransient } from "./database.js"

export const cartHTML = () => {
    const transient = getTransient()
    const minerals = getMinerals()
    const facilities = getFacilities()
    const mineralFacs = getMineralFacs()

    let html = ""
    if (transient.selectedMineral === undefined) {
        html += '<h2 class="cart">Space Cart</h2>'
    }
    else {
        const foundFacilityMineral = mineralFacs.find(
            (facilityMineral) => {
                if (facilityMineral.id === transient.selectedMineral) {

                    return facilityMineral
                }
            }
        )

        for (const mineral of minerals) {
            if (mineral.id === foundFacilityMineral.mineralId) {

                for (const facility of facilities) {
                    if (foundFacilityMineral.facilityId === facility.id) {
                        html += '<h2 class="cart">Space Cart</h2>'
                        html += `<div>1 ton of ${mineral.name} from ${facility.name}</div>`
                    }
                }
            }
        }
    }
    return html
}