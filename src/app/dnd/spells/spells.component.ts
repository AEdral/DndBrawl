import { Component, OnInit } from '@angular/core';
import { DndService } from '../dnd.service';  // o 'src/app/dnd/dnd.service' se necessario
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spells',
  standalone: false,
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.css'
})
export class SpellsComponent implements OnInit {
  spells: any[] = [];

  constructor(private dndService: DndService, private http: HttpClient) {}
  ngOnInit(): void {
    this.dndService.getSpells().subscribe(data => {
      this.spells = data.results;
    });
  }


  selectedSpell: any = null;



  selectSpell(spell: any) {// Ottieni URL completo
    const fullUrl = `https://www.dnd5eapi.co${spell.url}`;
    this.http.get(fullUrl).subscribe(data => {
      this.selectedSpell = data;
    });
  }

  getSlotLevels(spell: any): string[] {
    return spell.heal_at_slot_level ? Object.keys(spell.heal_at_slot_level).sort() : [];
  }


}