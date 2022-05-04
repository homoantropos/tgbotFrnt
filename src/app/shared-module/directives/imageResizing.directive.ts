import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResizing]'
})

export class ImageResizingDirective {

  @Input() file: File;
  @HostBinding('style.width') imagWidth: number;
  @HostBinding('style.height') height: number;
  @HostBinding('nativeElement') element: any;

  @HostListener('load') onLoad(): void {
    console.log(this.element, this.imagWidth, this.height);
  }
}
