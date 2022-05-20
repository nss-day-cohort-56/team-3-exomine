import { getTransient, getColonies } from "./database.js";

// need to import colonies governors and transient state
// colonyHTML func 
//  colony html 
// (if transient.selectedGovernorColony = undefined)
// {/* <div> Colony Minerals </div> */}
// else 
// for colony of colonies if transient state.selectedGovernorColony = colony.id <div>${colony.name} Minerals

export const colonyHTML = () => {
    const transient = getTransient()
    const colonies = getColonies()
    let html = ""
    if (transient.selectedGovernorColony === undefined) {
        html += '<h2 class="colonyDisplay">Colony Minerals</h2>'
    }
    else for (const colony of colonies) {
        if (transient.selectedGovernorColony === colony.id) {
            html += `<h2 class="colonyDisplay"> ${colony.name} Minerals</h2>`
        }
    }
    return html
}