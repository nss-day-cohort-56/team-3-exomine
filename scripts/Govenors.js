import { getGovernors, setGovernorColony } from "./database.js";

const governors = getGovernors()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "governor") {
            setGovernorColony(parseInt(changeEvent.target.value))
           
        }
    }
)

export const governorSelect = () => {
    let html = "<h2>Choose a Governor</h2>"

    html += '<select id="governor">'
    html += '<option value="0">Governors</option>'

    const govOptionsArray = governors.map( 
        (governor) => {
            return `<option value="${governor.colonyId}">${governor.name}</option><img src="${governor.avatar}" alt="image"/>`
        }
    )

    html += govOptionsArray.join("")
    html += "</select>"
    return html
}
