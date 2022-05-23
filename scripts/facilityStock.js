import { setFacility } from "./database.js"
import {facilitiesDropDown} from "./database.js"
const facilityDropDown = facilitiesDropDown()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "facilitiesOption") {
            setFacility(parseInt(changeEvent.target.value))
           
        }
    }
)
