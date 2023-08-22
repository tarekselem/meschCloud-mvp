import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      cardholderName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.minLength(16)]],
      expirationMonth: ['', [Validators.required, Validators.maxLength(2)]],
      expirationYear: ['', [Validators.required, Validators.maxLength(2)]],
      cvv: ['', [Validators.required]],
      amount: [0, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    this.paymentForm.markAllAsTouched();
    console.log('Payment data:', this.paymentForm.value);
  }
}
