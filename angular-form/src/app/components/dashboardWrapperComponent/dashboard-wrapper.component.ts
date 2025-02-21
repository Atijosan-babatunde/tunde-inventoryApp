import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-dashboard-wrapper',
    templateUrl: `
  <div *ngIf="shouldShowIframe">
  <iframe src="http://localhost:4201/" width="100%" height="100%" style="border: none;"></iframe>
</div>

  `,
    styleUrls: ['./dashboard-wrapper.component.css'],
})
export class DashboardWrapperComponent implements OnInit {
    reactDashboardUrl!: SafeResourceUrl;
    shouldShowIframe: boolean = true;

    constructor(private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        console.log("DashboardWrapperComponent Loaded!");
        console.log('shouldShowIframe:', this.shouldShowIframe);
        this.cdr.detectChanges();

        setTimeout(() => {
            this.cdr.detectChanges();
        }, 1000);
    }
}
