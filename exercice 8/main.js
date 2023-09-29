class pokemon {
    constructor(name, atk, def, pv) {
        this.name = name
        this.pv = pv
        this.atk = atk
        this.def = def
    }
    attackPoke(pokemon){
        pokemon.pv -= this.atk - this.def
    }
}

let Mimiqui = new pokemon ("Mimiqui", 91, 40, 150)
let Nymphali = new pokemon ("Nymphali", 86, 45, 155)

while (Mimiqui.pv >=0 && Nymphali.pv >= 0) {
    Mimiqui.attackPoke(Nymphali)
        console.log (Mimiqui.name + " a " + Mimiqui.pv + " pv restants")

    if (Nymphali.pv <= 0) {
        console.log(Mimiqui.name + " a remporté le combat")
        break
    }
    
   

    Nymphali.attackPoke(Mimiqui) 
        console.log (Nymphali.name + " a " + Nymphali.pv + " pv restants")
    if (Mimiqui.pv <= 0) {
        console.log(Nymphali.name + " a remporté le combat")
        break
    }
   
    
}


