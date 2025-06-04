import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-features',
  standalone: false,
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  data: any;
  endpoint: string = '';
  baseUrl: string = 'https://www.dnd5eapi.co';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const url = params['url'];
      if (url) {
        this.endpoint = url;
        this.loadData();
      }
    });

    // Se invece usi i parametri del path
    // this.route.params.subscribe(params => {
    //   this.endpoint = params['endpoint'];
    //   if (this.endpoint) this.loadData();
    // });
  }

  loadData() {
    this.http.get(this.baseUrl + this.endpoint).subscribe({
      next: (res) => this.data = res,
      error: (err) => console.error('Errore nel caricamento dei dati:', err)
    });
  }
}
