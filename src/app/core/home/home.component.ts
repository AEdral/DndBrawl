import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'D&D Brawl';
  description = 'An interactive viewer for Dungeons & Dragons 5e spells and classes. It features a two-column layout with scrollable content and detailed data display for selected items.';
}
