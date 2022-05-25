import { getGovernors, setGovernor, setGovernorColony, getTransient } from "./database.js";

const governors = getGovernors()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "governor") {
         const [colonyId, governorId] = changeEvent.target.value.split("--")
            setGovernorColony(parseInt(colonyId))
            setGovernor(parseInt(governorId))
            
        }
    }
)
document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.name === "governorOption") {

        }
    }
)

export const governorSelect = () => {
    let html = "<h2>Choose a Governor</h2>"

    html += '<select name="governor">'
    html += '<option value="0">Governors</option>'
    const transient = getTransient()
    const govOptionsArray = governors.map(
        (governor) => {
            return `<option ${governor.id === transient.selectedGovernor? "selected": "" } value="${governor.colonyId}--${governor.id}">${governor.name}</option><img src="${governor.avatar}" alt="image"/>`
        }
    )

    html += govOptionsArray.join("")
    html += "</select>"
    return html
}
