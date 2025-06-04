import { Component, OnInit } from '@angular/core';
import { DndService } from '../dnd.service';  // o 'src/app/dnd/dnd.service' se necessario
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; // ✅ aggiungi
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-races',
  standalone: false,
  templateUrl: './races.component.html',
  styleUrl: './races.component.css'
})
export class RacesComponent implements OnInit{
  races: any[] = [];
  selectedRace: any = null;


  constructor(
    private dndService: DndService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.dndService.getRaces().subscribe(data => {
      this.races = data.results;

      this.route.queryParams.subscribe(params => {
        const name = params['name'];
        if (name) {
          const race = this.races.find(c => c.index === name);
          if (race) this.selectRace(race);
        }
      });
    });
  }

  selectRace(race: any): void {
    //get api url
    const fullUrl = `https://www.dnd5eapi.co${race.url}`;
  
    this.http.get(fullUrl).subscribe(data => {
      //imposto la classe selezionata
      this.selectedRace = data;
    });
  }
}
