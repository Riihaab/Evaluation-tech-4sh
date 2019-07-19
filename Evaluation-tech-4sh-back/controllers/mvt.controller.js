var MvtService = require('../services/mvt.service');

var Mvt = require ('../models/mvt.model');
var XmlBuild = require('./xmlBuild');
var mailer = require("nodemailer");


_this = this;





exports.getMouvements = async function(req, res, next){

    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 50; 

    try{
    
        var mouvements = await MvtService.getMouvements({}, page, limit)
        
        
        return res.status(200).json({status: 200, data: mouvements, message: "Succesfully Recieved"});
        
    }catch(e){
        
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createMouvement = async function(req, res, next){


    

    // Req.Body contains the form submit values.

    {
        var Mvt = {
        type : req.body.type,
        description : req.body.description,
        date_mvt : req.body.date_mvt,
        date_creationmvt : req.body.date_creationmvt,
        magasin_origine : req.body.magasin_origine,
        code_magasinorigine : req.body.code_magasinorigine,
        magasin_destination : req.body.magasin_destination,
        code_magasindestination : req.body.code_magasindestination,
        status_douanier : req.body.status_douanier,
        type_reference : req.body.type_reference,
        reference : req.body.reference, 
        type_docdouanier : req.body.type_docdouanier,
        ref_docdouanier : req.body.ref_docdouanier,
        quant : req.body.quant ,
        quant_tot : req.body.quant_tot,
        poids : req.body.poids,
        poids_tot : req.body.poids_tot        }

        var smtpTransport = mailer.createTransport("SMTP",{
            service: "Gmail",
            auth: {
                user: "appmailer634@gmail.com",
                pass: "Vu5ze3cVG8"
            }
        }); 
        var mail = {
            from: "appmailer634@gmail.com",
            to: "mailreceiver46@gmail.com",
            subject: "Declaration d'un mouvement",
            
            attachments: [
                {
                  filePath: __dirname +"/xmlfile.xml"
                },
            ]
        }


    

    try{
       
        // Calling the Service function with the new object from the Request Body
    
       
        var createdMvt = await MvtService.createMouvement(Mvt);
        XmlBuild.generateXml(req.body);
        smtpTransport.sendMail(mail, function(error, response){
            if(error){
                console.log("Erreur lors de l'envoie du mail!");
                console.log(error);
            }else{
                console.log("Mail envoyé avec succès!")
            }
            smtpTransport.close();
        });
        return res.status(201).json({status: 201, data: createdMvt, message: "Succesfully Created", })
    
}
       
    
    catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: " Creation was Unsuccesfull"})
    }
}

}