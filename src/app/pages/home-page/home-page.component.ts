import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private api:ApiService){}
  todos:any;
  ngOnInit(){
    this.api.getTodo().subscribe((data:any) => {
this.todos=data
    })
  }

}
