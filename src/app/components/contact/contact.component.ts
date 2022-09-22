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
    
  }

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.createForm()
    this.feedbackForm.valueChanges.subscribe(data => this.onValueChanged(data))
  }



  onValueChanged(data: any): void {

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
        [Validators.required, Validators.pattern]],
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
