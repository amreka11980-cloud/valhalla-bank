/* =========================
   بيانات أعضاء البنك
========================= */

let members = JSON.parse(localStorage.getItem("valhallaMembers")) || {

    "ايس": {
        money: 100,
        purchases: []
    },

    "شارلوك": {
        money: 250,
        purchases: []
    },

    "اوراهارا": {
        money: 100,
        purchases: []
    },

    "شيسوي": {
        money: 100,
        purchases: []
    },

    "رانبو": {
        money: 100,
        purchases: []
    }

};


/* =========================
   حفظ البيانات
========================= */

function saveMembers() {

    localStorage.setItem(
        "valhallaMembers",
        JSON.stringify(members)
    );

}


/* =========================
   إضافة بيلي
========================= */

document.getElementById("addMoney").addEventListener("click", function () {

    const member =
        document.getElementById("memberSelect").value;

    const amount =
        Number(document.getElementById("moneyAmount").value);


    if (!amount || amount <= 0) {

        alert("اكتب مبلغ صحيح");

        return;
    }


    members[member].money += amount;

    saveMembers();


    alert(
        "تم إضافة " +
        amount +
        "k بيلي إلى " +
        member
    );


    document.getElementById("moneyAmount").value = "";

});


/* =========================
   خصم بيلي
========================= */

document.getElementById("removeMoney").addEventListener("click", function () {

    const member =
        document.getElementById("memberSelect").value;

    const amount =
        Number(document.getElementById("moneyAmount").value);


    if (!amount || amount <= 0) {

        alert("اكتب مبلغ صحيح");

        return;
    }


    if (members[member].money < amount) {

        alert("رصيد العضو لا يكفي");

        return;
    }


    members[member].money -= amount;

    saveMembers();


    alert(
        "تم خصم " +
        amount +
        "k بيلي من " +
        member
    );


    document.getElementById("moneyAmount").value = "";

});


/* =========================
   إضافة عملية شراء
========================= */

document.getElementById("addPurchase").addEventListener("click", function () {

    const member =
        document.getElementById("purchaseMember").value;

    const name =
        document.getElementById("purchaseName").value.trim();

    const price =
        Number(document.getElementById("purchasePrice").value);


    if (!name || !price || price <= 0) {

        alert("أدخل اسم المشتريات والسعر");

        return;
    }


    members[member].purchases.push({

        name: name,

        price: price,

        date: new Date().toLocaleDateString("ar-IQ")

    });


    saveMembers();


    alert(
        "تمت إضافة عملية الشراء للعضو " +
        member
    );


    document.getElementById("purchaseName").value = "";

    document.getElementById("purchasePrice").value = "";

});


// =========================
// تشغيل قائمة ☰
// =========================

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

if (menuBtn && sideMenu) {

    menuBtn.addEventListener("click", function (event) {
        event.stopPropagation();

        sideMenu.classList.toggle("active");
    });

    sideMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    document.addEventListener("click", function () {
        sideMenu.classList.remove("active");
    });

}