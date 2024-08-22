import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  showDetails = false;
  activeDetail: string | null = null;

  toggleSections(): void {
    this.showDetails = !this.showDetails;
  }

  toggleDetail(detail: string): void {
    this.activeDetail = this.activeDetail === detail ? null : detail;
  }

  constructor() {
    setInterval(() => {
      const carousel = document.getElementById('inspirationCarousel') as HTMLElement;
      if (carousel) {
        const nextBtn = carousel.querySelector('.carousel-control-next') as HTMLElement;
        nextBtn.click();
      }
    }, 3000); // 3 seconds interval
  }

}
