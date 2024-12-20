import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: false,

  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss',
})
export class UncommonPageComponent {
  //i18n Select
  name: string = 'Manuel';
  gender: 'male' | 'female' = 'male';

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Estefanny';
    this.gender = 'female';
  }

  //i18n Plural
  clients: string[] = ['Manuel', 'Estefanny', 'Luis', 'Carlos', 'Andrea'];

  clientsMap ={
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  }

  deleteClient():void{
    this.clients.shift();
  }

  //KeyValue Pipe
  person ={
    name: 'Manuel',
    age: 25,
    address: 'Calle 123 # 456',
  }

  //Async Pipe
  myObservableTimer = interval(1000);


  promiseValue : Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('Tenemos datos de la promesa');
    }, 3500);
  });
}
