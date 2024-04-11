import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule,CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  animations:[
    trigger('swingAnimation',[
      transition(':enter',[
        style({transform:'translateX(-100%)','opacity':0}),
        animate('2s', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class CarouselComponent {
  imageIndex:number=0;
  isCircular:boolean=true;
  images: any[] = [
    { path: 'assets/images/bg1.jpg',title:'17 Years of excellence in',subTitle:'Construction Industry',show:'hide' },
    { path: 'assets/images/bg3.jpg',title:'When Service Matters',subTitle:'World Class Service',show:'hide' }, 
    { path: 'assets/images/bg2.jpg',title:'We believe sustainability',subTitle:'Meet Our Engineers',show:'hide'} ]
  ngOnInit(): void {

  }


    

}
