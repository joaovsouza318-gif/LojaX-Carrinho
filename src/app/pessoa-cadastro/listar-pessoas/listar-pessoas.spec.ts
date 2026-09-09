import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPessoas } from './listar-pessoas';

describe('ListarPessoas', () => {
  let component: ListarPessoas;
  let fixture: ComponentFixture<ListarPessoas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPessoas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarPessoas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
