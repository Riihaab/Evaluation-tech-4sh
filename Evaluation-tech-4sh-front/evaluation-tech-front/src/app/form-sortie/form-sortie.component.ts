import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-form-sortie',
  templateUrl: './form-sortie.component.html',
  styleUrls: ['./form-sortie.component.scss']
})
export class FormSortieComponent implements OnInit {
  private url ="http://localhost:3000/api/mouvements"

  constructor(private http:Http) { }

  ngOnInit() {
  }
  Submit_srt(srt){

    var ref = Number(srt.reference);
    
    if (srt.quant_tot <srt.quant) {
      //ERROR message if quantité > quantité totale

      document.getElementById('err-quant').innerHTML = " quantité totale doit être supérieure à quantité *";
    }
  
    else if (srt.poids_tot <srt.poids){
//error message if poids> poids total
      document.getElementById('err-poids').innerHTML = " poids total doit être supérieur à poids *";
   }
  
  else if (srt.type_reference == "AWB"&&(srt.reference.length!=11||Number.isInteger(ref) == false)){
    
    //error message if reference type is AWB and entered reference doesn't contain 11 digits
     
    document.getElementById('err-ref').innerHTML = " reference awb doit comporter 11 chiffres *";
    console.log(srt.reference);
  
   }
    else
    {
    srt.magasin_origine = "NV1";
    srt.type = "sortie";
    srt.date_creationmvt= new Date();
    this.http.post(this.url,srt).subscribe(response=>console.log(response));
    }
  
  }

}
