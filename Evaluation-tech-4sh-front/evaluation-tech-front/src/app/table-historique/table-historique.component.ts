import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-table-historique',
  templateUrl: './table-historique.component.html',
  styleUrls: ['./table-historique.component.scss']
})
export class TableHistoriqueComponent implements OnInit {
  private url ="http://localhost:3000/api/mouvements";
  mvts = [];

  constructor( private http:Http) { }

  ngOnInit() {
// gets data from the url above and assign it to the mvts array in json format
    this.http.get(this.url).subscribe(response=>{
    this.mvts=response.json().data.docs;
    console.log(this.mvts)});
  }

}
