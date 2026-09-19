/* =========================
   البحث عن الأعضاء
========================= */

const searchInput = document.getElementById("searchInput");
const members = document.querySelectorAll(".member-row");


searchInput.addEventListener("input", function () {

    const searchText = this.value
        .trim()
        .toLowerCase();


    members.forEach(function (member) {

        const name = member
            .dataset
            .name
            .toLowerCase();


        if (name.includes(searchText)) {

            member.style.display = "grid";

        } else {

            member.style.display = "none";

        }

    });

});


/* =========================
   نافذة تفاصيل العضو
========================= */

const memberModal = document.getElementById("memberModal");

const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");

const modalName = document.getElementById("modalName");

const modalMoney = document.getElementById("modalMoney");


/* =========================
   عمليات الشراء
========================= */

const transactionsTitle =
    document.getElementById("transactionsTitle");

const transactionsList =
    document.getElementById("transactionsList");

const arrow =
    document.getElementById("arrow");


/* =========================
   فتح تفاصيل العضو
========================= */

members.forEach(function (member) {

    member.addEventListener("click", function () {

        const name = member.dataset.name;
        const money = member.dataset.money;
        const image = member.dataset.image;

        modalName.textContent = name;

        modalMoney.textContent = money + " 🪙";

        modalImage.textContent = image;


        /* قائمة المشتريات مغلقة عند فتح النافذة */

        transactionsList.style.display = "none";

        arrow.textContent = "▼";


        memberModal.style.display = "flex";

    });

});

/* =========================
   إغلاق النافذة
========================= */

closeModal.addEventListener("click", function () {

    memberModal.style.display =
        "none";

});


/* =========================
   إغلاق عند الضغط خارج النافذة
========================= */

memberModal.addEventListener("click", function (event) {

    if (event.target === memberModal) {

        memberModal.style.display =
            "none";

    }

});


/* =========================
   فتح / إغلاق عمليات الشراء
========================= */

transactionsTitle.addEventListener("click", function () {

    if (transactionsList.style.display === "none") {

        transactionsList.style.display =
            "block";

        arrow.textContent =
            "▼";

    } else {

        transactionsList.style.display =
            "none";

        arrow.textContent =
            "▲";

    }

});


/* =========================
   زر ESC لإغلاق النافذة
========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        memberModal.style.display =
            "none";

    }

});

/* =========================
   قائمة البنك ☰
========================= */

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");


// فتح وإغلاق القائمة

menuBtn.addEventListener("click", function (event) {

    event.stopPropagation();

    sideMenu.classList.toggle("active");

});


// منع إغلاق القائمة عند الضغط داخلها

sideMenu.addEventListener("click", function (event) {

    event.stopPropagation();

});


// إغلاق القائمة عند الضغط خارجها

document.addEventListener("click", function () {

    sideMenu.classList.remove("active");

});