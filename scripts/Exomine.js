
/*
import {  }  from "./database.js"    - not determined ***
import {  }        from "./Sales.js"       - not determined ***
import {  }      from "./Entrees.js"
import {  }      from "./Vegetables.js"
import {  }        from "./SideDishes.js"

document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        addPurchase()
    }
})
*/


export const Exomine = () => {
    return `
        <header class="header">
            <h1 class="title">Khajit's Mineral Emporium</h1>
        </header>

     <article class="choices">
        <section class="choices__governors">
            <h2>Governors</h2>
      
        </section>
        <section class="choices__facilities">
            <h2>Facilities</h2>
        
        </section>
        <section class="choices__minerals">
            <h2>Minerals</h2>
  
        </section>
    </article>


    <article>
            <button id="purchase">Purchase Selected Minerals</button>
    </article>

    <article class="customerOrders">
            <h2>Mineral Sales</h2>
     
     </article>

    `
}
