import { TestBed } from '@angular/core/testing';

import { AnalizadorLexicoService } from './analizador-lexico.service';

describe('AnalizadorLexicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalizadorLexicoService = TestBed.get(AnalizadorLexicoService);
    expect(service).toBeTruthy();
  });
});
