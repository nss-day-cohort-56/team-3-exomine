import { getTransient, getGovernors } from "./database.js";

export const avatarHTML = () => {
    const transient = getTransient()
    const governors = getGovernors()
    let html = ""
    if (transient.selectedGovernor === undefined) {
        html += ""
    }
    else {
        for (const governor of governors) {
            if (governor.id === transient.selectedGovernor) {
                html += `<img class="pic" src="${governor.avatar}" alt="image"/> `
            }
        }
    }
    return html
}