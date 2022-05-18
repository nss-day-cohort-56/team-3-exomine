import { getFacilities } from "./database.js";
const facilities = getFacilities()

export const facilitiesDropDown = () => {
    let html = "<h2>Choose a Facility </h2>"
    html += `<select id="facilitiesOption">`
    html += '<option value="0">Facilities</option>'
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