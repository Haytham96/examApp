import { Component, Input } from '@angular/core';
import { FeatureListComponent } from '../../components/feature-list/feature-list.component';

@Component({
  selector: 'app-create-account',
  imports: [FeatureListComponent],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent {
  @Input() featureList!: string;
}
