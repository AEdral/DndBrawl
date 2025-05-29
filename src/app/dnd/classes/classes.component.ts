import { Component, OnInit } from '@angular/core';
import { DndService } from '../dnd.service';  // o 'src/app/dnd/dnd.service' se necessario

@Component({
  selector: 'app-classes',
  standalone: false,
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent implements OnInit {
  classes: any[] = [];

  constructor(private dndService: DndService) {}
  ngOnInit(): void {
    this.dndService.getClasses().subscribe(data => {
      this.classes = data.results;
    });
  }

}