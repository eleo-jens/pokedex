import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: number 

  constructor(private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this._activatedRoute.snapshot.params['id']; 
  }

  // methode pour get les détails d'un pokemon

}
