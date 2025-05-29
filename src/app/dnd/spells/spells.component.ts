import { Component, OnInit } from '@angular/core';
import { DndService } from '../dnd.service';  // o 'src/app/dnd/dnd.service' se necessario

@Component({
  selector: 'app-spells',
  standalone: false,
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.css'
})
export class SpellsComponent implements OnInit {
  spells: any[] = [];

  constructor(private dndService: DndService) {}
  ngOnInit(): void {
    this.dndService.getSpells().subscribe(data => {
      this.spells = data.results;
    });
  }

}