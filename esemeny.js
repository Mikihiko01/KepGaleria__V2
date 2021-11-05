class KepOsztaly{
    constructor(elem, index, index2) {
        this.elem = elem;
        this.index = index;
        this.index2 = index2;

        this.cim = elem.children("h1");
        this.img = img.children("img");
        this.leiras = leiras.children("p");
        this.setAdatok();
        this.elem.on("click", () => { 
            this.KattintasTrigger();
        });
        

    }
    setAdatok(ertekek){
        this.cim =html(ertekek.index.this.cim);
        this.img.attr("src", ertekek.index.eleresiut);
        this.leiras.html(ertekek.index.leiras);
    }
    

    
    KattintasTrigger(){
        let esemeny = new CustomEvent("atvalt",{detail:this.index});
        window.dispatchEvent(esemeny);
    }
}