import { getGovernors } from "./database.js";

const governors = getGovernors()


// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "governor") {
//             setGovernor(parseInt(changeEvent.target.value))
//             // const chosenOption = changeEvent.target.value
//             // console.log(chosenOption)  // "1" or "2"
//         }
//     }
// )

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
