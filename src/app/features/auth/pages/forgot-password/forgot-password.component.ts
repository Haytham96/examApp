import { Component, Input } from '@angular/core';
import { FeatureListComponent } from '../../components/feature-list/feature-list.component';

@Component({
  selector: 'app-forgot-password',
  imports: [FeatureListComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  @Input() featureList!: string;
}
