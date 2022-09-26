import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { Dish } from 'src/app/shared/dish';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/app/shared/comment';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {

  dish: Dish | null = null;
  dishIsd: string[] = []
  prev: string = ''
  next: string = ''
  commentForm: FormGroup;

  formErrors = {
    author: '',
    comment: '',
  }

  validationMessages = {
    author: {
      required: 'Author is required',
      minlength: 'Author must be at least 2 chars',
    },
    comment: {
      required: 'Comment is required',
    }
  }


  constructor(private dishService: DishService, private location: Location, private route: ActivatedRoute, private fb: FormBuilder) {
    this.commentForm = this.createForm()
    this.commentForm.valueChanges.subscribe(() => this.onValueChanged())

  }


  private onValueChanged(): void {
    if (!this.commentForm) return;

    const form = this.commentForm;
    for (const field in this.formErrors) {

      if (!this.formErrors.hasOwnProperty(field)) continue;
      this.formErrors[field] = '';
      const control = form.get(field);

      if (!(control && control.dirty && control.invalid)) continue;
      const messages = this.validationMessages[field];

      for (const key in control.errors) {
        if (control.errors.hasOwnProperty(key)) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }

    }

  }


  private createForm(): FormGroup {
    return this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2)]],
      rate: 5,
      comment: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.dishService.getDishIds()
      .subscribe(ids => this.dishIsd = ids)
    this.route.params
      .pipe(switchMap((params: Params) => this.dishService.getDishById(params['id'])))
      .subscribe(dish => {
        this.dish = dish
        this.setPrevNext(dish.id)
      })
  }

  setPrevNext(dishId: string) {
    const index = this.dishIsd.indexOf(dishId)
    const length = this.dishIsd.length
    this.prev = this.dishIsd[(length + index - 1) % length]
    this.next = this.dishIsd[(length + index + 1) % length]
  }

  goBack(): void {
    this.location.back()
  }

  onSubmit() {

    this.dish.comments.push(
      new Comment(
        parseInt(this.commentForm.get('rate').value),
        this.commentForm.get('comment').value,
        new Date().toDateString(),
        this.commentForm.get('author').value
      )
    )
    this.commentForm.reset()
  }


}
