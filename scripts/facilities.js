import { getFacilities, getTransient } from "./database.js";
const facilities = getFacilities()
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "governor") 
        facilitiesDropDown()
    }
    )
    
    export const facilitiesDropDown = () => {
        let html = "<h2>Choose a Facility </h2>"
        html += `<select id="facilitiesOption">`
        const transient = getTransient()
        if (transient.selectedGovernorColony === undefined) {
        html += '<option value="0">Facilities</option>'
    }
    else {
        const facilityOptionArray = facilities.map(
            (facility) => {
                return `<option id="facility value="${facility.id}"/> ${facility.name} 
            </option>`
            }
        )
        html += facilityOptionArray.join("")
    }
    html += "</select>"
    return html
} 
