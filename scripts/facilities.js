import { getFacilities } from "./database.js";
const facilities = getFacilities()

export const govDropDown = () => {
    let html = ""
    html += `<select id="facilitiesOption">`
    const facilityOptionArray = facilities.map( 
        (facility) => {
            return `<option id="facility value="${facility.id}"/> ${facility.name} 
            </option>`
        }
    ) 
    html += facilityOptionArray.join("")
    html += "</select>"
    return html
}