var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var MvtSchema = new mongoose.Schema({
    type: String,
    description: String,
    date_mvt: Date,
    date_creationmvt: Date,
    magasin_origine: String,
    code_magasinorigine: String,
    magasin_destination: String,
    code_magasindestination: String,
    status_douanier: String,
    type_reference: String,
    reference: String, 
    type_docdouanier: String,
    ref_docdouanier: String,
    quant: Number,
    quant_tot: Number,
    poids: Number,
    poids_tot: Number
})

MvtSchema.plugin(mongoosePaginate)
const Mvt = mongoose.model('Mvt', MvtSchema)

module.exports = Mvt;
