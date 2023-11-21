// home-page.component.ts

import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomeComponent {
  todos: any;
  inputAdd: string = ''; // Add this line to initialize the inputAdd variable

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getTodo().subscribe((data: any) => {
      this.todos = data;
    });
  }

  delete(id: any) {
    this.todos = this.todos.filter((e: { id: any }) => e.id != id);
  }

  addItem() {
    if (this.inputAdd.trim() !== '') {
      const newItem = {
        id: this.todos.length + 1, // You should replace this with a proper ID generation logic
        title: this.inputAdd,
        completed: false
      };

      this.todos.push(newItem);

      // Clear the input field after adding the item
      this.inputAdd = '';
    }
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
