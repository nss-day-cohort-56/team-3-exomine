import { setFacility } from "./database.js"




document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "facilitiesOption") {
            setFacility(parseInt(changeEvent.target.value))
           
        }
    }
)