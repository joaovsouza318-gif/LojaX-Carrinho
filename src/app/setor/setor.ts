import { Component, OnInit } from '@angular/core';
import { SetorService } from '../service/setor/setor-service';
import { Setor } from '../models/setor';

@Component({
  selector: 'app-setor',
  standalone: true,
  imports: [],
  templateUrl: './setor.html',
  styleUrl: './setor.css'
})
export class SetorComponent implements OnInit {

  setores: Setor[] = [];

  constructor(private setorService: SetorService) {}

  ngOnInit(): void {
    this.setores = this.setorService.listar();
  }
}