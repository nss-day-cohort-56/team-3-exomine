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
        const transient = getTransient()
        let html = "<h2>Choose a Facility </h2>"
        html += `<select id="facilitiesOption">`
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
