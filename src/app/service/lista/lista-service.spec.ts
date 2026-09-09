import { TestBed } from '@angular/core/testing';
import { listaService } from './lista-service';

describe('listaService', () => {
  let service: listaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(listaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
