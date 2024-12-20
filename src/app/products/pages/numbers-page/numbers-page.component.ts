import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  standalone: false,
  
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.scss'
})
export class NumbersPageComponent {

  totalSales: number = 25687.1454;
  percent: number = 0.25485 ;

}
