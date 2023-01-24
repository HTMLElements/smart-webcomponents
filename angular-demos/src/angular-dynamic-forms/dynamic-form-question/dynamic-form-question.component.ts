import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from './../question-base';

@Component({
  selector: 'app-question',
  styleUrls: ['./dynamic-form-question.component.css'],
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
