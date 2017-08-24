import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  //aplicado somente em paragrafos
  selector: 'p[FundoAmarelo]'
  
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) { 
    //console.log(this.elementRef);

    //Código abaixo não recomendado por obter vulnerabilidades. 
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';

    //Recomendado
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    )

  }
}
