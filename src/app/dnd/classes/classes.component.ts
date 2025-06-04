import { Component, OnInit } from '@angular/core';
import { DndService } from '../dnd.service';  // o 'src/app/dnd/dnd.service' se necessario
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; // ✅ aggiungi
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-classes',
  standalone: false,
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent implements OnInit {
  classes: any[] = [];
  selectedClass: any = null;
  selectedClassLevels: any = null;
  sidebarVisible = true;
  tableHeaders: string[] = [];
  
  headerLabels: { [key: string]: string } = {
    'spell_slots_level_1': 'Slot level 1',
    'spell_slots_level_2': 'Slot level 2',
    'spell_slots_level_3': 'Slot level 3',
    'spell_slots_level_4': 'Slot level 4',
    'spell_slots_level_5': 'Slot level 5',
    'spell_slots_level_6': 'Slot level 6',
    'spell_slots_level_7': 'Slot level 7',
    'spell_slots_level_8': 'Slot level 8',
    'spell_slots_level_9': 'Slot level 9',

    // Aggiungi altre personalizzazioni qui


  };

  public isArray = Array.isArray;

  constructor(
    private dndService: DndService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dndService.getClasses().subscribe(data => {
      this.classes = data.results;

      this.route.queryParams.subscribe(params => {
        const name = params['name'];
        if (name) {
          const classe = this.classes.find(c => c.index === name);
          if (classe) this.selectClass(classe);
        }
      });
    });
    
  }
  selectClass(classe: any): void {
    //get api url
    const fullUrl = `https://www.dnd5eapi.co${classe.url}`;
  
    this.http.get(fullUrl).subscribe(data => {
      //imposto la classe selezionata
      this.selectedClass = data;
    });
  

    //creo la tabella di livellamento della classe
    this.http.get(fullUrl + "/levels").subscribe((data: any) => {
      const levelsArray = data as any[];
      //lista dei campi da appiattire
      const fieldsToFlatten = ['spellcasting', 'class_specific', "creating_spell_slots","sneak_attack","martial_arts"];
      //creazione della tabella flattenedLevels
      const flattenedLevels = levelsArray.map(level => {
        let flattened = { ...level };
        for (const field of fieldsToFlatten) {
          if (flattened[field] && typeof flattened[field] === 'object') {
            flattened = { ...flattened, ...flattened[field] };
            delete flattened[field];
          }
        }
  
        // Rimuovi eventuali campi indesiderati globali
        const { index, url, updated_at, ...cleaned } = flattened;
        return cleaned;
      });
  
      //esporto la tabella
      this.selectedClassLevels = flattenedLevels;
      //esporto gli header della tabella
      this.tableHeaders = Object.keys(this.selectedClassLevels[0]);
    });
  }


  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  isObject(value: any): boolean {
    return value && typeof value === 'object';
  }

  hasUrl(value: any): boolean {
    return value && typeof value === 'object' && 'url' in value;
  }

  formatHeader(key: string): string {
    return key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }
}
