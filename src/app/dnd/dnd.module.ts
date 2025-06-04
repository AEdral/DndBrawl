import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ questo è il modulo giusto!
import { ClassesComponent } from './classes/classes.component';
import { RacesComponent } from './races/races.component';
import { FeatsComponent } from './feats/feats.component';
import { SpellsComponent } from './spells/spells.component';
import { ItemsComponent } from './items/items.component';
import { FeaturesComponent } from './features/features.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ClassesComponent,
    RacesComponent,
    FeatsComponent,
    SpellsComponent,
    ItemsComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule, // ✅ serve per usare *ngFor, *ngIf, ecc.
    RouterModule,
    HttpClientModule
  ]
})
export class DndModule { }
