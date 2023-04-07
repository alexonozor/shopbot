import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Md5 } from './md5';

@Directive({
  selector: '[appGravatar]'
})
export class GravatarDirective implements OnInit {

  @Input() set email(value: string) {
    this.updateEmail(value);
  }
  fallback = 'wavatar'; // https://en.gravatar.com/site/implement/images/

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    if (this.el) {
      this.el.nativeElement.src = `//www.gravatar.com/avatar/`;
    }
  }

  updateEmail(email: string): void {
    console.log(email)
    if (!email || !this.el.nativeElement) {
      return;
    }
    const emailHash = Md5.hashStr(email.trim().toLowerCase());
    this.el.nativeElement.src =
      `//www.gravatar.com/avatar/${emailHash}?d=${this.fallback}`;
      console.log(this.el.nativeElement.src, emailHash)
  }
}
