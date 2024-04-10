import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPopup]',
  standalone: true
})
export class PopupDirective implements OnInit{

  constructor(private elRef:ElementRef) { }
  @Input() values:any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
