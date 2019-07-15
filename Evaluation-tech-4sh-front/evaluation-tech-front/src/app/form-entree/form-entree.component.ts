import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';


@Component({
  selector: 'app-form-entree',
  templateUrl: './form-entree.component.html',
  styleUrls: ['./form-entree.component.scss']
})
export class FormEntreeComponent implements OnInit {
private url ="http://localhost:3000/api/mouvements"
  constructor(private http:Http) { }

  ngOnInit() {
  }
Submit_ent(entr) {
  var ref = Number(entr.reference);
   if (entr.quant_tot <entr.quant) {
     //displays error message if quantité > quantité totale
    document.getElementById('error-quant').innerHTML = " quantité totale doit être supérieure à quantité *";
  }

  else if (entr.poids_tot <entr.poids){
    //displays error message if poids> poids total
    document.getElementById('error-poids').innerHTML = " poids total doit être supérieur à poids *";
 }

else if (entr.type_reference == "AWB"&&(entr.reference.length!=11||Number.isInteger(ref) == false)){
  
  //displays error message if ref type is AWB and ref isn't composed of 11 digits
   
  document.getElementById('error-ref').innerHTML = " reference awb doit comporter 11 chiffres *";
  console.log(entr.reference);

 }
  else
  {
  entr.magasin_destination = "NV1";
  entr.type = "entrée";
  entr.date_creationmvt= new Date();
  this.http.post(this.url,entr).subscribe(response=>console.log(response));
  }

}
}
