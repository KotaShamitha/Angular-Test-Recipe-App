import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RecipeListComponent],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  recipe: any;

  constructor(
    public route: ActivatedRoute,
    public recipeService: RecipeService
  ) {}

  ngOnInit() {
    const recipeId = +this.route.snapshot.paramMap.get('id')!;
    this.recipe = this.recipeService.getRecipeById(recipeId);
  }
}
