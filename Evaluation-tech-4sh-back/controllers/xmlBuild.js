var builder = require('xmlbuilder');
var fs = require('fs');
var Mvt = require('../models/mvt.model');


var dirPath = __dirname +"/xmlfile.xml";

exports.generateXml = function (mvt){

    var newMvt = new Mvt({
        type : mvt.type,
        description : mvt.description,
        date_mvt : mvt.date_mvt,
        date_creationmvt : mvt.date_creationmvt,
        magasin_origine : mvt.magasin_origine,
        code_magasinorigine : mvt.code_magasinorigine,
        magasin_destination : mvt.magasin_destination,
        code_magasindestination : mvt.code_magasindestination,
        status_douanier : mvt.status_douanier,
        type_reference : mvt.type_reference,
        reference : mvt.reference, 
        type_docdouanier : mvt.type_docdouanier,
        ref_docdouanier : mvt.ref_docdouanier,
        quant : mvt.quant ,
        quant_tot : mvt.quant_tot,
        poids : mvt.poids,
        poids_tot : mvt.poids_tot
        })
    
    var xml = builder.create('Message');
    xml.ele('CargoMessage', {'type': newMvt.type})
    xml.ele('Header', {'from': 'RAPIDCARGO', 'to':'CARGOINFO', 'messageTime': new Date()})
    xml.ele(newMvt.type)
    xml.ele('declaredIn', {'code':'CDGR1','label':'RapidCargo CDG'})
    .ele('from', {'code': newMvt.code_magasinorigine, 'label':newMvt.magasin_origine} )
    .ele('goods')
    .ele('ref', {'type': newMvt.type_reference, 'code':newMvt.reference})
    .ele('amount', {'quantity': newMvt.quant, 'weight':newMvt.poids})
    .ele('description', newMvt.description)
    .ele('totalRefAmount', {'quantity': newMvt.quant_tot, 'weight': newMvt.poids_tot})
    xml.ele('customStatus', newMvt.status_douanier)

    var xmldoc = xml.toString({ pretty: true });
    fs.writeFile(dirPath, xmldoc, function(err) {
        if(err) { return console.log(err); } 
           console.log("The file was saved!");
     });
}