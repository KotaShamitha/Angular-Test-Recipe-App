import { Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';

export const routes: Routes = [
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/new', component: RecipeFormComponent }, 
  { path: 'recipes/edit/:id', component: RecipeFormComponent }, 
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
];

