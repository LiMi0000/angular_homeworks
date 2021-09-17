import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorHover]',
})
export class ColorHoverDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
  }
}
