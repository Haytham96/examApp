import { Component, Input } from '@angular/core';
import { FeatureListComponent } from '../../components/feature-list/feature-list.component';

@Component({
  selector: 'app-login',
  imports: [FeatureListComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Input() featureList!: string;
}
