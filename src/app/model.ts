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

export class Foranmald {
  did:number;
  name:string;
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

