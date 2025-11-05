import { Component, Input } from '@angular/core';
import { FeatureListComponent } from '../../components/feature-list/feature-list.component';

@Component({
  selector: 'app-new-password',
  imports: [FeatureListComponent],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css',
})
export class NewPasswordComponent {
  @Input() featureList!: string;
}
