import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PessoaCadastro } from './pessoa-cadastro';

describe('PessoaCadastro', () => {
  let component: PessoaCadastro;
  let fixture: ComponentFixture<PessoaCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaCadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(PessoaCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
