import { getFacilities, getTransient, setFacilityId, setFacilityName } from "./database.js";
const facilities = getFacilities()
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "governor") 
        facilitiesDropDown()
    }
    )
    document.addEventListener(
        "change",
        (changeEvent) => {
            if (changeEvent.target.id === "facilitiesOption") {
                const [facilityId, facilityName] = changeEvent.target.value.split("--")
                setFacilityId(parseInt(facilityId))
                setFacilityName(facilityName)
               
            }
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
        html += '<option value="0">Facilities</option>'
        const facilityOptionArray = facilities.map(
            (facility) => {
                return `<option id="facility" ${facility.id === transient.selectedFacility? "selected": "" } value="${facility.id}--${facility.name}"/> ${facility.name} 
            </option>`
            }
        )
        html += facilityOptionArray.join("")
    }
    html += "</select>"
    return html
} 
