import { Subject } from "rxjs/Subject";
import { Injectable } from "@angular/core";

@Injectable()
export class Communication{
    
    private newMvt = new Subject<String>();
    
    
    constructor(){

    }

    newMvtCom(){
        this.newMvt.next("OK");
    }
}