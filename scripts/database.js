const database = {
    minerals: [
        { id: 1, name: "Uranium" },
        { id: 2, name: "Diamonds"  },
        { id: 3, name: "Unobtanium"  },
        { id: 4, name: "Adamantium"  },
        { id: 5, name: "Bath Salts"  },
        { id: 6, name: "Kryptonite"  }
    ],
    governors: [
        { id: 1, name: "Arnold Schwarzenegger", active: true},
        { id: 2, name: "Elon Musk", active: true},
        { id: 3, name: "Jeff Bezo-Bot", active: true},
        { id: 4, name: "Spike Spiegle", active: true},
        { id: 5, name: "Mecha-Donald Trump", active: true},
        { id: 6, name: "Camacho", active: false},
        { id: 7, name: "Malcom Reynolds", active: true},
        { id: 8, name: "Jet Black", active: false},
        { id: 9, name: "Zombie JFK", active: true}
    ],
    facilities: [
        {id: 1, name: "Asteroid Belt", active: true},
        {id: 2, name: "Outer Planetary", active: true},
        {id: 3, name: "Inner Planetary", active: false}

    ],
    govColonies: [
        {id: 1, govId: 1, colonyId: 1, colonyName: "Earth"},
        {id: 2, govId: 2, colonyId: 2, colonyName: "Mars"},
        {id: 3, govId: 3, colonyId: 3, colonyName: "Ceres"},
        {id: 4, govId: 4, colonyId: 4, colonyName: "Ganymede"},
        {id: 5, govId: 5, colonyId: 5, colonyName: "Uranus"},
        {id: 6, govId: 6, colonyId: 1, colonyName: "Earth"},
        {id: 7, govId: 7, colonyId: 6, colonyName: "Europa"},
        {id: 8, govId: 8, colonyId: 4, colonyName: "Ganymede"},
        {id: 9, govId: 9, colonyId: 1, colonyName: "Earth"}

    ],
    mineralFacs: [
            {id: 1, facilityId: 1, mineralId: 1, mineralname: "Uranium"},
            {id: 2, facilityId: 1, mineralId: 2, mineralname: "Diamonds"},
            {id: 3, facilityId: 2, mineralId: 3, mineralname: "Unobtanium"},
            {id: 4, facilityId: 2, mineralId: 4, mineralname: "Adamantium"},
            {id: 5, facilityId: 3, mineralId: 5, mineralname: "Bath Salts"},
            {id: 6, facilityId: 3, mineralId: 6, mineralname: "Kryptonite"}
            

    ],

    transientState: {}
}




// purchases: [],
//     customSales: [
//         {
//             id: 1,
//             entreeId: 3,
//             sideId: 2,
//             veggieId: 3,
//             timestamp: 1614659931693
//         }
//     ],

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }

