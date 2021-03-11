const init = (mongoose) => {
    
    // On doit définir le schéma de la collection
    const agribalyses = mongoose.Schema({
        nom_francais: String,
        LCI_name: String,
        ciqual_AGB: String,
        ciqual_code: String,
        groupe: String,
        sous_groupe: String,
        saison: String,
        avion: Boolean,
        materiau_emballage: String,
        DQR: {
            overall: String,
            P: String,
            TiR: String,
            GR: String,
            TeR: String
        }
        // })
    })
    
    // On dit à mongoose quel model on utilise, (nomDuModel(pluralisé automatiquement, schema))
    const Agribalyses = mongoose.model('agribalyses', agribalyses)
    
    return Agribalyses
}

module.exports = init