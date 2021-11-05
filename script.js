$(function () {

    let kep1 = {
        eleresiut: "kepek/kep.jpg",
        cim: " Panda",
        leiras: "játszik"
    };
    let kep2 = {
        eleresiut: "kepek/kep1.jpg",
        cim: " Tea",
        leiras: "Rászál egylevél"
    };
    let kep3 = {
        eleresiut: "kepek/kep2.jpg",
        cim: " Béka",
        leiras: "Alszik"
    };
    const kepTomb = { kep1, kep2, kep3 };
    const szuloElem = $("article");
    const sablonElem = $(".esemeny");


    for (let index = 0; index < kepTomb; index++) {
        for (let k = 0; k < 2; k++) {
            const ujElem = sablonElem.clone().appendTo(szuloElem);
            const galeria = new Kartya("kepek/kep" + (index + 1) + ".jpg", ujElem);

        }
    }

    const nagyKepElem = $("#nagy");
    const ujElem = sablonElem.clone().appendTo(szuloElem);
    const foKepp = new KepOsztaly(ujElem, kepTomb);
    sablonElem.remove();

    $(window).on("atvalt", (event) => {
        foKepp.setAdatok(event, details)


    });
    let index = 0;
    $("#bal").on("click"), function () {
        index -= 1;
        if (index < 0) {
            index = -1;
        }
        galeria.setAdatok(kepTomb[index]);
    }
    $("#jobb").on("click"), function () {
        index += 1
        if (index === kepTomb.lenght) {
            index = 0;
        }
        galeria.setAdatok(kepTomb[index]);
    }





})