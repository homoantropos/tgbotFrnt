import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appSetVideoDimensions]'
})

export class VideoDimensionsDirective {
  @HostBinding('width') width: string;
}
