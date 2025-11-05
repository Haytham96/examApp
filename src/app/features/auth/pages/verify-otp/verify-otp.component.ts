import { Component, Input } from '@angular/core';
import { FeatureListComponent } from '../../components/feature-list/feature-list.component';

@Component({
  selector: 'app-verify-otp',
  imports: [FeatureListComponent],
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.css',
})
export class VerifyOtpComponent {
  @Input() featureList!: string;
}
