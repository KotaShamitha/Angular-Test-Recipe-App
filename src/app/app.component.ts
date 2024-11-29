import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { CommonModule } from '@angular/common'; 
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet, 
    RecipeListComponent,   
    RecipeDetailsComponent,
    RecipeFormComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'recipe-app';
  logLink() {
    console.log('Add Recipe clicked!');
  }
}
