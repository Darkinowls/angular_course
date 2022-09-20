import { Component, OnInit, ViewChild } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Feedback, ContactType} from "../../shared/feedback";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback | null = null;
  contactType = ContactType ;

  // @ViewChild('fform') feedbackFormDirective;

  constructor(private fb:FormBuilder) {
    this.feedbackForm = this.createForm()
  }

  ngOnInit(): void {
  }

  private createForm() : FormGroup {
    return this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      telnum: [0, Validators.required],
      email: ['', Validators.required],
      agree: false,
      contacttype: 'None',
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value
    console.log(this.feedback)
    this.feedbackForm.reset()

  }
}
