const database = {
    minerals: [
        { id: 1, name: "Uranium" },
        { id: 2, name: "Diamonds" },
        { id: 3, name: "Unobtanium" },
        { id: 4, name: "Adamantium" },
        { id: 5, name: "Bath Salts" },
        { id: 6, name: "Kryptonite" }
    ],
    governors: [
        { id: 1, name: "Reanimated Arnold Schwarzenegger", colonyId: 1, active: true, avatar: "../images/Avatars/ShwartzIsAsBigAsMine.png" },
        { id: 2, name: "The Ghola of Elon Musk", colonyId: 2, active: true, avatar: "../images/Avatars/Musk.png" },
        { id: 3, name: "Jeff Bezo-Bot", colonyId: 3, active: true, avatar: "../images/Avatars/Bezps.png" },
        { id: 4, name: "Spike Spiegle", colonyId: 4, active: true, avatar: "../images/Avatars/Spike.png" },
        { id: 5, name: "Mecha-Donald Trump", colonyId: 5, active: true, avatar: "../images/Avatars/FlamingShit.png" },
        { id: 6, name: "President Camacho", colonyId: 1, active: false, avatar: "../images/Avatars/Camacho.png" },
        { id: 7, name: "Malcom Reynolds", colonyId: 6, active: true, avatar: "../images/Avatars/MalcomReynolds.png" },
        { id: 8, name: "Jet Black", colonyId: 4, active: false, avatar: "../images/Avatars/Jet.png" },
        { id: 9, name: "Zombie JFK", colonyId: 1, active: true, avatar: "../images/Avatars/JFK.png" }
    ],
    facilities: [
        { id: 1, name: "Asteroid Belt", active: true },
        { id: 2, name: "Outer Planetary", active: true },
        { id: 3, name: "Inner Planetary", active: false }

    ],
    colonies: [
        { id: 1, name: "Earth" },
        { id: 2, name: "Mars" },
        { id: 3, name: "Ceres" },
        { id: 4, name: "Ganymede" },
        { id: 5, name: "Uranus" },
        { id: 6, name: "Europa" },
    ],
    mineralFacs: [
        { id: 1, facilityId: 1, mineralId: 1, quantity: 9 },
        { id: 2, facilityId: 1, mineralId: 2, quantity: 5 },
        { id: 3, facilityId: 2, mineralId: 3, quantity: 9 },
        { id: 4, facilityId: 2, mineralId: 4, quantity: 1 },
        { id: 5, facilityId: 3, mineralId: 5, quantity: 2 },
        { id: 6, facilityId: 3, mineralId: 6, quantity: 3 },
        { id: 7, facilityId: 1, mineralId: 4, quantity: 4 },
        { id: 8, facilityId: 2, mineralId: 6, quantity: 5 },
        { id: 9, facilityId: 3, mineralId: 1, quantity: 3 },
    ],
    colonyStocks: [
        { id: 1, colonyId: 1, mineralId: 1, quantity: 7 },
        { id: 2, colonyId: 1, mineralId: 2, quantity: 2 },
        { id: 3, colonyId: 1, mineralId: 3, quantity: 3 },
        { id: 4, colonyId: 1, mineralId: 4, quantity: 4 },
        { id: 5, colonyId: 1, mineralId: 5, quantity: 5 },
        { id: 6, colonyId: 1, mineralId: 6, quantity: 3 },
        { id: 7, colonyId: 2, mineralId: 1, quantity: 4 },
        { id: 8, colonyId: 2, mineralId: 2, quantity: 5 },
        { id: 9, colonyId: 2, mineralId: 3, quantity: 6 },
        { id: 10, colonyId: 2, mineralId: 4, quantity: 9 },
        { id: 11, colonyId: 2, mineralId: 5, quantity: 6 },
        { id: 12, colonyId: 2, mineralId: 6, quantity: 5 },
        { id: 13, colonyId: 3, mineralId: 1, quantity: 7 },
        { id: 14, colonyId: 3, mineralId: 2, quantity: 4 },
        { id: 15, colonyId: 3, mineralId: 3, quantity: 6 },
        { id: 16, colonyId: 3, mineralId: 4, quantity: 7 },
        { id: 17, colonyId: 3, mineralId: 5, quantity: 4 },
        { id: 18, colonyId: 3, mineralId: 6, quantity: 5 },
        { id: 19, colonyId: 4, mineralId: 1, quantity: 6 },
        { id: 20, colonyId: 4, mineralId: 2, quantity: 4 },
        { id: 21, colonyId: 4, mineralId: 3, quantity: 5 },
        { id: 22, colonyId: 4, mineralId: 4, quantity: 7 },
        { id: 23, colonyId: 4, mineralId: 5, quantity: 6 },
        { id: 24, colonyId: 4, mineralId: 6, quantity: 5 },
        { id: 25, colonyId: 5, mineralId: 1, quantity: 9 },
        { id: 26, colonyId: 5, mineralId: 2, quantity: 9 },
        { id: 27, colonyId: 5, mineralId: 3, quantity: 8 },
        { id: 28, colonyId: 5, mineralId: 4, quantity: 7 },
        { id: 29, colonyId: 5, mineralId: 5, quantity: 8 },
        { id: 30, colonyId: 5, mineralId: 6, quantity: 7 },
        { id: 31, colonyId: 6, mineralId: 1, quantity: 8 },
        { id: 32, colonyId: 6, mineralId: 2, quantity: 7 },
        { id: 33, colonyId: 6, mineralId: 3, quantity: 9 },
        { id: 34, colonyId: 6, mineralId: 4, quantity: 9 },
        { id: 35, colonyId: 6, mineralId: 5, quantity: 3 },
        { id: 36, colonyId: 6, mineralId: 6, quantity: 4 }
    ],

    transientState: {}
}







export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}

export const getGovColonies = () => {
    return database.govColonies.map(govColony => ({ ...govColony }))
}

export const getMineralFacs = () => {
    return database.mineralFacs.map(mineralFac => ({ ...mineralFac }))
}
export const getColonyStocks = () => {
    return database.colonyStocks.map(colonyStock => ({ ...colonyStock }))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}

export const getTransient = () => {
    return { ...database.transientState }
}



export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setGovernorColony = (governorColonyId) => {
    database.transientState.selectedGovernorColony = governorColonyId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const spacePurchase = () => {

    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    for (const mineralFac of database.mineralFacs) {
        if (database.transientState.selectedMineral === mineralFac.id) {
            console.log("before",mineralFac)
            mineralFac.quantity -= 1
            console.log("after",mineralFac)
            for (const colonyStock of database.colonyStocks) {
                if (colonyStock.colonyId === database.transientState.selectedGovernorColony  &&
                    colonyStock.mineralId === mineralFac.mineralId) {
                    colonyStock.quantity += 1
                } 
                }
        }
    }
    database.transientState.selectedMineral = undefined
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
        // if transient.selectedMineral === mineralFacility.id
    //return
    //perform function inside database?
// ++ colonyStocks.quantity -- mineralFacs.quantity 
// 