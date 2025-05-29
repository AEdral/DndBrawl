import { Component, OnInit } from '@angular/core';
import { DndService } from '../dnd.service';  // o 'src/app/dnd/dnd.service' se necessario

@Component({
  selector: 'app-items',
  standalone: false,
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  items: any[] = [];

  constructor(private dndService: DndService) {}
  ngOnInit(): void {
    this.dndService.getItems().subscribe(data => {
      this.items = data.results;
    });
  }

}
