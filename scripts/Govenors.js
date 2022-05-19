import { getGovernors, setGovernor } from "./database.js";

const governors = getGovernors()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "governor") {
            setGovernor(parseInt(changeEvent.target.value))
            console.log("taco")
        }
    }
)

export const governorSelect = () => {
    let html = "<h2>Choose a Governor</h2>"

    html += '<select id="governor">'
    html += '<option value="0">Governors</option>'

    const govOptionsArray = governors.map( (governor) => {
            return `<option value="${governor.id}">${governor.name}</option>`
        }
    )

    html += govOptionsArray.join("")
    html += "</select>"
    return html
}
