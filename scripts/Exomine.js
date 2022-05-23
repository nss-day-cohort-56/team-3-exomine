import { colonyHTML } from "./colonies.js"
import { facilitiesDropDown } from "./facilities.js"
import { governorSelect } from "./Govenors.js"
import { colonyStockHTML } from "./colonyStock.js"
import { facilityStockHTML } from "./facilityStock.js"

export const Exomine = () => {
    return `
        <header class="header">
            <h1 class="title">Khajit's Mineral Emporium</h1>
        </header>
     <article class="top">
     <article class="choices">
        <section class="choices__governors">
              ${governorSelect()}
        </section>
        <section class="choices__facilities">
           ${facilitiesDropDown()}
        
        </section>
    </article>
     <article class="colonyStockContainer">
        <section class="colonyName">
        ${colonyHTML()}
        ${colonyStockHTML()}
        </section>
     </article>
     </article>
     <article class="bottom">
     <article>
        <section class="choices__minerals">
         ${facilityStockHTML()}
        </section>
    </article>

    <article>
            <button id="purchase">Purchase Selected Minerals</button>
    </article>

    <article class="customerOrders">
            <h2>Mineral Sales</h2>
     
     </article>
     </article>
    `
}
