import { Component, OnInit } from '@angular/core';
import { DndService } from '../dnd.service';  // o 'src/app/dnd/dnd.service' se necessario

@Component({
  selector: 'app-feats',
  standalone: false,
  templateUrl: './feats.component.html',
  styleUrl: './feats.component.css'
})

export class FeatsComponent implements OnInit {
  feats: any[] = [];

  constructor(private dndService: DndService) {}
  ngOnInit(): void {
    this.dndService.getFeats().subscribe(data => {
      this.feats = data.results;
    });
  }

}