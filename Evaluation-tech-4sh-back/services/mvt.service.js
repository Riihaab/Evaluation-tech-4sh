var Mvt = require('../models/mvt.model');

_this = this;

exports.getMouvements = async function(query, page, limit){

    // Options setup for the mongoose paginate

    var options = {
        page,
        limit
    }
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var mouvements = await Mvt.paginate(query, options)
        
        // Return the mouvements list that was retured by the mongoose promise

        return mouvements;

    } catch (e) {

        // return a Error message describing the reason 

        throw Error('Error while Paginating')
    }
}

exports.createMouvement = async function(mvt){
 
  //  if (mvt.type=="sortie"){
        
        //var check = Mvt.findOne({'reference': mvt.reference});
        
       // if(check){
            

          //  throw Error(" sortie invalide");
       // }
   // }
   
    // Creating a new Mongoose Object by using the new keyword

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

    try{
        

    var savedMvt = await newMvt.save();

    return savedMvt; 

    }catch(e){
      
         //return a Error message describing the reason     

        throw Error("Error while Creating mouvement")
    }
   

  
}

