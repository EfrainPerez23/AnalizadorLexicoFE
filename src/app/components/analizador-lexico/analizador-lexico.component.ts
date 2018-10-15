import { Component, OnInit } from '@angular/core';
import { AnalizadorLexicoService } from './service/analizador-lexico.service';
import { AnalizadorLexico } from './model/analizador-lexico';

@Component({
  selector: 'app-analizador-lexico',
  templateUrl: './analizador-lexico.component.html',
  styleUrls: ['./analizador-lexico.component.scss']
})
export class AnalizadorLexicoComponent implements OnInit {

  public analizadorLexico: string;
  public analizadorLexicoData: AnalizadorLexico[];

  public constructor(private analizador: AnalizadorLexicoService) { }

  public ngOnInit(): void  { }

  public analizar(): void {
    this.analizador.analizadorLexico(this.analizadorLexico).subscribe((data: {data: AnalizadorLexico[]}): void => {
      if (data) {
        this.analizadorLexicoData = data.data;
      }
    });
  }

}
