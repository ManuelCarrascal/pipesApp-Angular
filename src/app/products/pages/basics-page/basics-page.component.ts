import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  standalone: false,
  
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.scss'
})
export class BasicsPageComponent {

  nameLower: string = 'manuel';
  nameUpper: string = 'MANUEL';
  fullName: string = 'MaNuEl CaRrASCal';

  customDate: Date = new Date();
  


}
