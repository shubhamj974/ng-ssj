import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoPastePassword]',
})
export class NoPastePasswordDirective {
  constructor(private eleRef: ElementRef) {}
  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const inputElement = this.eleRef.nativeElement as HTMLInputElement;

    if (inputElement.type === 'password') {
      event.preventDefault();
    }
  }
}
