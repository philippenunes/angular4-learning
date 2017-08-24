import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter')
  OnMouseOver() {
  this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = this.highlightColor;
  }

  @HostBinding ('style.backgroundColor') backgroundColor: string;

  @Input() //Recebe o valor passado no template.
  defaultColor: string = 'white';

  @Input() //Recebe o valor passado no template.
  highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;    
  }

}
