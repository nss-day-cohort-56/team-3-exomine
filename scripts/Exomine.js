import { colonyHTML } from "./colonies.js"
import { facilitiesDropDown } from "./facilities.js"
import { governorSelect } from "./Govenors.js"
import { colonyStockHTML } from "./colonyStock.js"
import { facilityStockHTML } from "./facilityStock.js"
import { cartHTML } from "./cart.js"
import { spacePurchase } from "./database.js"
import { avatarHTML } from "./avatar.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "purchase") {
            spacePurchase()
        }

    }
)

export const Exomine = () => {
    return `
        <header class="header">
            <h1 class="title">Khajit's Mineral Emporium</h1>
        </header>
     <article class="top">
     <article class="choices">
     <section class="govatar">   
     <section class="choices__governors">
            ${governorSelect()}
        </section>
        
        <section class="avatar">
            ${avatarHTML()}
        </section>
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
    <article class="facilityMin">
        <section class="choices__minerals">
         ${facilityStockHTML()}
        </section>
    </article>

    <article class="cartButton">
        <section class="cart">
        ${cartHTML()}
        
        </section>
        <button id="purchase">Purchase Selected Minerals</button>
    </article>
    `
}
