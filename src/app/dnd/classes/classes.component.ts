import { Component, OnInit } from '@angular/core';
import { DndService } from '../dnd.service';  // o 'src/app/dnd/dnd.service' se necessario
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-classes',
  standalone: false,
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent implements OnInit {
  classes: any[] = [];
  selectedClass: any = null;

  constructor(private dndService: DndService,  private http: HttpClient) {}
  ngOnInit(): void {
    this.dndService.getClasses().subscribe(data => {
      this.classes = data.results;
    });
  }


  selectClass(classe: any) {// Ottieni URL completo
    const fullUrl = `https://www.dnd5eapi.co${classe.url}`;
    this.http.get(fullUrl).subscribe(data => {
      this.selectedClass = data;
    });
  }


}