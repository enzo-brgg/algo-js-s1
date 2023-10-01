class character{
    constructor(name, MentalHealth){
        this.name = name
        this.mentalHealth= MentalHealth
    }
    traject(playlist) {
        console.log(music)
        let nbrchangetaxi = 0
        let redLightpass = 0
        
        
        while (redLightpass <30 && this.mentalHealth > 0) {
            redLightpass +=1 
            console.log(redLightpass + " feux passé")
            let randomSong = Math.floor(Math.random()*5)
            console.log(music[randomSong] + " a été joué (ça c'est du bon son)")

        if(music[randomSong]=== "Anissa-Wejdene"){
            console.log("Anissa est passé et perd 1 de santé mentale (mais quand ce supplice prendra t-il fin ?!")
            this.mentalHealth --
            nbrchangetaxi ++
            console.log("John a changé de taxi (" + nbrchangetaxi + ")")
            
            console.log(this.mentalHealth)
        
        if (John.mentalHealth === 0) {
            console.log("BAM, DEFLAGRATION")
            break
            
        }
        }
        if (redLightpass === 30) {
            console.log(this.name + " a réussi à survivre à ce supplice")
            break
            
        }
        }
    }
}


let John = new character ("John", 10)
let music = ["Anissa-Wejdene", " Fujii Kaze-Matsuri", " Queen-Radio Ga Ga"," Adele-Oh My God", " Aespa-Hold On Tight"]

John.traject(music)
console.log(John)
console.log(music)



