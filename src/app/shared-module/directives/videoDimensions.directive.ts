import {Directive, HostBinding, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appSetVideoDimensions]'
})

export class VideoDimensionsDirective implements OnChanges {

  @Input()
  @HostBinding('style.width') imageWidth: string;
  @HostBinding('style.height') imageHeight: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.imageWidth = '300px';
  }

  @HostListener('mouseenter') onMouseenter(): void {
    console.log('mouseenter');
  }

  @HostListener('load') onLoad(): void {

    // this.imageWidth = `${window.innerHeight * 0.5}px`;
    // console.log('width:', this.imageWidth, 'height:', this.imageHeight);
  }

  // @HostListener('abort') onabort(): void {
  //   console.log('abort');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('canplay') oncanplay(): void {
  //   console.log('canplay');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('canplaythrough') oncanplaythrough(): void {
  //   console.log('oncanplaythrough');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('cuechange') oncuechange(): void {
  //   console.log('oncuechange');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('durationchange') ondurationchange(): void {
  //   console.log('ondurationchange');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('emptied') onemptied(): void {
  //   console.log('onemptied');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('ended') onended(): void {
  //   console.log('onended');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('error') onerror(): void {
  //   console.log('onerror');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('loadeddata') onloadeddata(): void {
  //   console.log('onloadeddata');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('loadedmetadata') onloadedmetadata(): void {
  //   console.log('onloadedmetadata');
  // }
  //
  // @HostListener('loadstart') onloadstart(): void {
  //   console.log('onloadstart');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('pause') onpause(): void {
  //   console.log('onpause');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('play') onplay(): void {
  //   console.log('onplay');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('playing') onplaying(): void {
  //   console.log('onplaying');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('progress') onprogress(): void {
  //   console.log('onprogress');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('ratechange') onratechange(): void {
  //   console.log('onratechange');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('seeked') onseeked(): void {
  //   console.log('onseeked');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('seeking') onseeking(): void {
  //   console.log('onseeking');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('stalled') onstalled(): void {
  //   console.log('onstalled');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('suspend') onsuspend(): void {
  //   console.log('onsuspend');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('timeupdate') ontimeupdate(): void {
  //   console.log('ontimeupdate');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('volumechange') onvolumechange(): void {
  //   console.log('onvolumechange');
  //   // console.log(this.width);
  // }
  //
  // @HostListener('waiting') onwaiting(): void {
  //   console.log('onwaiting');
  //   // console.log(this.width);
  // }
}




