import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Feedback, ContactType } from "../../shared/feedback";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback | null = null;
  contactType = ContactType;

  formErrors = {
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    message: '',
  }

  validationMessages = {
    firstname: {
      required: 'First name is required',
      minlength: 'First name must be at least 2 chars',
      maxlength: 'First name must be less than 25 chars',
    },
    lastname: {
      required: 'Last name is required',
      minlength: 'Last name must be at least 2 chars',
      maxlength: 'Last name must be less than 25 chars',
    },
    telnum: {
      required: 'Tel, number is required',
      pattern: 'It is not tel number'
    },
    email: {
      required: 'Email is required',
      email: 'It is not email'
    },
    message: {
      required: 'Message is required',
    }


  }

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.createForm()
    this.feedbackForm.valueChanges.subscribe(() => this.onValueChanged())
  }



  onValueChanged(): void {
    if (!this.feedbackForm) return;

    const form = this.feedbackForm;
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

  ngOnInit(): void {
  }

  private createForm(): FormGroup {
    return this.fb.group({
      firstname: ['',
        [Validators.required, Validators.minLength(2),
        Validators.maxLength(25)],
      ],
      lastname: ['',
        [Validators.required, Validators.minLength(2),
        Validators.maxLength(25)]],
      telnum: [0,
        [Validators.required, Validators.pattern('[0-9]*')]],
      email: ['',
        [Validators.required,
        Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value
    console.log(this.feedback)
    this.feedbackForm.reset()

  }
}
