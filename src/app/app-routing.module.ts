import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { TestComponent } from './core/test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ClassesComponent } from './dnd/classes/classes.component';
import { RacesComponent } from './dnd/races/races.component';
import { SpellsComponent } from './dnd/spells/spells.component';
import { FeatsComponent } from './dnd/feats/feats.component';
import { ItemsComponent } from './dnd/items/items.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'test', component: TestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'races', component: RacesComponent },
  { path: 'spells', component: SpellsComponent },
  { path: 'feats', component: FeatsComponent },
  { path: 'items', component: ItemsComponent },
  { path: '**', component: PageNotFoundComponent },  // Redirect to home if no route is matched
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
