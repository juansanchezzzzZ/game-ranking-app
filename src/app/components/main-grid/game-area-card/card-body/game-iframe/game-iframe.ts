import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-game-iframe',
  standalone: true,
  templateUrl: './game-iframe.html',
  styleUrl: './game-iframe.css'
})
export class GameIframe implements OnInit {
  @Input() gameUrl: string = 'https://isometric-game-nu.vercel.app/';
  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.updateSafeUrl();
  }

  private updateSafeUrl() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.gameUrl);
  }
}