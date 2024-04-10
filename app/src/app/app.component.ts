import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { FeaturesComponent } from './features/features.component';
import { RecentProjectsComponent } from './recent-projects/recent-projects.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CarouselComponent,FeaturesComponent,RecentProjectsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app';
  openMenu:boolean=true;
  onClickButton(){
    console.log('hii');
    
  }
}
