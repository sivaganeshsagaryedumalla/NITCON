import { CommonModule } from '@angular/common';
import { Component, ElementRef, NgZone, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  services = [
    { title: 'Home Construction', desc: 'Expert construction services for building your dream home.', path: 'assets/images/service-icon1.png', class: 'cls1' },
    { title: 'Building Remodels', desc: 'Transform your space with professional building renovation solutions.', path: 'assets/images/service-icon2.png', class: 'cls2' },
    { title: 'Interior Design', desc: 'Elevate your interior spaces with personalized design expertise.', path: 'assets/images/service-icon3.png', class: 'cls3' },
    // { title: null, desc: 'Comprehensive service center offering various solutions for your needs.', path: 'assets/images/service-center.jpg' },
    { title: 'Exterior Design', desc: 'Enhance your property\'s curb appeal with innovative exterior design solutions.', path: 'assets/images/service-icon4.png', class: 'cls4' },
    { title: 'Renovation', desc: 'Revitalize your property with top-notch renovation services tailored to your needs.', path: 'assets/images/service-icon5.png', class: 'cls5' },
    { title: 'Safety Management', desc: 'Prioritize safety with expert management solutions for peace of mind.', path: 'assets/images/service-icon6.png', class: 'cls6' }
  ];
  className: any;
  activeIndex: any;


  constructor(private renderer: Renderer2,
    private elementRef: ElementRef,
    private ngZone: NgZone) {

  }

  onTouchStart(e: any, index: number) {
    this.className = e.class;
    this.activeIndex = index;

  }
  onMouseEnter(e: any, index: number) {
    this.className = e.class;
    this.activeIndex = index;

  }

  // ngOnInit(){
  //   this.observeScroll();
  // }
  // observeScroll(): void {
  //   const target=this.elementRef.nativeElement.querySelector('.box');
  //   const options = {
  //     threshold: 0.5 // Adjust the threshold as needed
  //   };
  //   const observer=new IntersectionObserver((entries)=>{
  //     entries.forEach((entry:any)=>{
  //       if(entry.isIntersecting){
  //         this.ngZone.run(()=>{
  //           this.renderer.addClass(this.elementRef.nativeElement.querySelector('.box'),'scrolled')
  //         })
  //       }
  //       else{
  //         this.ngZone.run(()=>[
  //           this.renderer.addClass(this.elementRef.nativeElement.querySelector('.box'),'scrolled')
  //         ])
  //       }

  //     })
  //   },options)
  //   observer.observe(target);
  // }


}
