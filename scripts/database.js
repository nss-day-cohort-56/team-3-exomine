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
        { id: 1, name: "Reanimated Arnold Schwarzenegger", colonyId: 1, active: true },
        { id: 2, name: "The Ghola of Elon Musk", colonyId: 2, active: true },
        { id: 3, name: "Jeff Bezo-Bot", colonyId: 3, active: true },
        { id: 4, name: "Spike Spiegle", colonyId: 4, active: true },
        { id: 5, name: "Mecha-Donald Trump", colonyId: 5, active: true },
        { id: 6, name: "President Camacho", colonyId: 1, active: false },
        { id: 7, name: "Malcom Reynolds", colonyId: 6, active: true },
        { id: 8, name: "Jet Black", colonyId: 4, active: false },
        { id: 9, name: "Zombie JFK", colonyId: 1, active: true }
    ],
    facilities: [
        { id: 1, name: "Asteroid Belt", active: true },
        { id: 2, name: "Outer Planetary", active: true },
        { id: 3, name: "Inner Planetary", active: false }

    ],
    colonies: [
        {id: 1, name: "Earth"},
        {id: 2, name: "Mars"},
        {id: 3, name: "Ceres"},
        {id: 4, name: "Ganymede"},
        {id: 5, name: "Uranus"},
        {id: 6, name: "Europa"},
    ],
    mineralFacs: [
        { id: 1, facilityId: 1, mineralId: 1, quantity: 0 },
        { id: 2, facilityId: 1, mineralId: 2, quantity: 0 },
        { id: 3, facilityId: 2, mineralId: 3, quantity: 0 },
        { id: 4, facilityId: 2, mineralId: 4, quantity: 0 },
        { id: 5, facilityId: 3, mineralId: 5, quantity: 0 },
        { id: 6, facilityId: 3, mineralId: 6, quantity: 0 },
        { id: 7, facilityId: 1, mineralId: 4, quantity: 0 },
        { id: 8, facilityId: 2, mineralId: 6, quantity: 0 },
        { id: 9, facilityId: 3, mineralId: 1, quantity: 0 },
    ],    
    colonyStock: [
        { id: 1, colonyId: 1, mineralId: 1, quantity: 0 },
        { id: 2, colonyId: 1, mineralId: 2, quantity: 0 },
        { id: 3, colonyId: 1, mineralId: 3, quantity: 0 },
        { id: 4, colonyId: 1, mineralId: 4, quantity: 0 },
        { id: 5, colonyId: 1, mineralId: 5, quantity: 0 },
        { id: 6, colonyId: 1, mineralId: 6, quantity: 0 },
        { id: 7, colonyId: 2, mineralId: 1, quantity: 0 },
        { id: 8, colonyId: 2, mineralId: 2, quantity: 0 },
        { id: 9, colonyId: 2, mineralId: 3, quantity: 0 },
        { id: 10, colonyId: 2, mineralId: 4, quantity: 0 },
        { id: 11, colonyId: 2, mineralId: 5, quantity: 0 },
        { id: 12, colonyId: 2, mineralId: 6, quantity: 0 },
        { id: 13, colonyId: 3, mineralId: 1, quantity: 0 },
        { id: 14, colonyId: 3, mineralId: 2, quantity: 0 },
        { id: 15, colonyId: 3, mineralId: 3, quantity: 0 },
        { id: 16, colonyId: 3, mineralId: 4, quantity: 0 },
        { id: 17, colonyId: 3, mineralId: 5, quantity: 0 },
        { id: 18, colonyId: 3, mineralId: 6, quantity: 0 },
        { id: 19, colonyId: 4, mineralId: 1, quantity: 0 },
        { id: 20, colonyId: 4, mineralId: 2, quantity: 0 },
        { id: 21, colonyId: 4, mineralId: 3, quantity: 0 },
        { id: 22, colonyId: 4, mineralId: 4, quantity: 0 },
        { id: 23, colonyId: 4, mineralId: 5, quantity: 0 },
        { id: 24, colonyId: 4, mineralId: 6, quantity: 0 },
        { id: 25, colonyId: 5, mineralId: 1, quantity: 0 },
        { id: 26, colonyId: 5, mineralId: 2, quantity: 0 },
        { id: 27, colonyId: 5, mineralId: 3, quantity: 0 },
        { id: 28, colonyId: 5, mineralId: 4, quantity: 0 },
        { id: 29, colonyId: 5, mineralId: 5, quantity: 0 },
        { id: 30, colonyId: 5, mineralId: 6, quantity: 0 },
        { id: 31, colonyId: 6, mineralId: 1, quantity: 0 },
        { id: 32, colonyId: 6, mineralId: 2, quantity: 0 },
        { id: 33, colonyId: 6, mineralId: 3, quantity: 0 },
        { id: 34, colonyId: 6, mineralId: 4, quantity: 0 },
        { id: 35, colonyId: 6, mineralId: 5, quantity: 0 },
        { id: 36, colonyId: 6, mineralId: 6, quantity: 0 } 
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

export const getTransient = () => {
    return {...database.transientState} 
}




export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setGovernorColony = (governorColonyId) => {
    database.transientState.selectedGovernorColony = governorColonyId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const purchaseMineral = () => {

    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

