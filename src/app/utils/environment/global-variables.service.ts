import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  constructor() { }

  readonly  host: string = 'http://206.189.101.3:8090';

  //readonly  host: string = 'http://localhost:8090';

}
