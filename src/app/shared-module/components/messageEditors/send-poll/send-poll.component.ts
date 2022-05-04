import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {PostmanService} from '../../../services/postman.service';

@Component({
  selector: 'app-send-poll',
  templateUrl: './send-poll.component.html',
  styleUrls: ['./send-poll.component.css']
})
export class SendPollComponent implements OnInit, OnDestroy {

  pollForm: FormGroup;
  pSub: Subscription;
  submitted = false;
  sent = 0;
  today = new Date();

  @ViewChild('question') questionInput: ElementRef<HTMLInputElement>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private postman: PostmanService
  ) {
  }

  ngOnInit(): void {
    this.pollForm = this.createForm();
    // обовязкова умова телеграму - мінімум два варіанта відповідей, тому метод викликається двічі
    this.addPollOptions();
    this.addPollOptions();
    if (this.pollForm.controls.question) {
      setTimeout(
        () => this.questionInput.nativeElement.focus(),
        0
      );
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
      chat_id: [481547986],
      question: ['', [Validators.required]],
      options: this.fb.array([]),
      total_voter_count: [null],
      is_closed: [false],
      is_anonymous: [true],
      type: ['regular'],
      allows_multiple_answers: [false],
      correct_option_id: [null],
      explanation: [''],
      open_period: [null],
      close_date: [null],
      explanation_parse_mode: ['HTML']
    });
  }

  get options(): FormArray {
    return this.pollForm.controls.options as FormArray;
  }

  addPollOptions(): void {
    return this.options.push(
      this.fb.group({
        text: ['', [Validators.required]],
        voter_count: [null]
      })
    );
  }

  removePollOptions(index: number): void {
    this.options.removeAt(index);
  }

  onSubmit(value: any): void {
    if (this.pollForm.invalid) {
      return;
    }
    this.submitted = true;
    this.postman.sentPoll(value)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = false;
        },
        error => {
          console.error(error.message ? error.message : error);
          this.submitted = false;
        }
      );
    this.pollForm.reset();
    this.submitted = false;
    this.router.navigate(['main']);
  }

  onReset(): void {
    this.router.navigate(['main']);
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }
}
