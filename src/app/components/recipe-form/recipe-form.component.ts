import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule], 
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  recipeForm!: FormGroup;
  isEditMode = false;
  recipeId!: number;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Initialize form
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      cuisine: ['', Validators.required],
      description: ['', Validators.required],
    });

    // Check if editing
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.recipeId = +params['id'];
        const recipe = this.recipeService.getRecipeById(this.recipeId);
        if (recipe) {
          this.recipeForm.patchValue(recipe); // Prepopulate form
        }
      }
    });
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      if (this.isEditMode) {
        // Update recipe
        this.recipeService.updateRecipe(this.recipeId, this.recipeForm.value);
      } else {
        // Add new recipe
        this.recipeService.addRecipe(this.recipeForm.value);
      }
      this.router.navigate(['/recipes']); // Redirect to recipe list
    }
  }
}