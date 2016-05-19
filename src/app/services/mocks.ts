import {Anmalan, Start, Resultat, Egenskaper} from "../model";

export var EGENSKAPER:Egenskaper = {
  starttid: '12:05',
  antalPerGrupp: 13,
  forstaStartnummer: 200,
  tidMellanGrupper: 5,
  antalVarv: 3
};

export var FORANMALDA:Anmalan[] = [
  {did: 11, name: 'Mr. Nice', gender: null, clazz: null},
  {did: 12, name: 'Narco', gender: null, clazz: null},
  {did: 13, name: 'Bombasto', gender: null, clazz: null},
  {did: 14, name: 'Celeritas', gender: null, clazz: null},
  {did: 15, name: 'Magneta', gender: null, clazz: null},
  {did: 16, name: 'RubberMan', gender: null, clazz: null},
  {did: 17, name: 'Dynama', gender: null, clazz: null},
  {did: 18, name: 'Dr IQ', gender: null, clazz: null},
  {did: 19, name: 'Magma', gender: null, clazz: null},
  {did: 20, name: 'Tornado', gender: null, clazz: null}
];

export var STARTLIST:Start[] = [
  {did: 12, name: 'Narco', gender: 'herrar', clazz: 'elit', startnumber: 100, starttime: null, didNotStart: false, didNotFinish: false}
];

export var RESULTLIST:Resultat[] = [
  {did: 13, name: 'Bombasto', gender: 'herrar', clazz: 'elit', finishOrder: 1, finishtime: null}
];
