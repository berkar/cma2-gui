export class Egenskaper {
  starttid:string;
  antalPerGrupp:number;
  forstaStartnummer:number;
  tidMellanGrupper:number;
  antalVarv:number
}

export class Item {
  did:number;
  name:string;
  gender:string;
  clazz:string;
}

export class Anmalan extends Item {

}

export class Start extends Item {
  startnumber:number;
  starttime:string;
  didNotStart:boolean;
  didNotFinish:boolean;
}

export class Resultat extends Item {
  finishOrder:number;
  finishtime:string;
}

