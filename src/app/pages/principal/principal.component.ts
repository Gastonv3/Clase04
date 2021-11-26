import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  private _bio: boolean = true;
  private _redes: boolean = false;

  constructor() { }

  get bio():boolean{

    return this._bio;
  }
  get redes():boolean{

    return this._redes;
  }

  ngOnInit(): void {
  }

  public MostrarRedes(){
    this._bio = false
    this._redes = true

  }
  public MostrarBio(){
    this._bio = true
    this._redes = false
  }

}
