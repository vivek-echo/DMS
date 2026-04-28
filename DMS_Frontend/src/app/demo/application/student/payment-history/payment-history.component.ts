import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface PaymentRecord {
  invoice: string;
  courseName: string;
  amount: number;
  date: string;
  status: 'Success' | 'Pending';
  method: string;
  transactionId: string;
}

@Component({
  selector: 'app-payment-history',
  imports: [CommonModule, RouterLink],
  templateUrl: './payment-history.component.html',
  styleUrl: './payment-history.component.scss'
})
export class PaymentHistoryComponent {
  readonly payments: PaymentRecord[] = [
    {
      invoice: 'INV-2026-1048',
      courseName: 'Advanced Angular Interface Design',
      amount: 2499,
      date: 'April 18, 2026',
      status: 'Success',
      method: 'UPI',
      transactionId: 'TXN-AXP-440192'
    },
    {
      invoice: 'INV-2026-0986',
      courseName: 'Mobile App UI Masterclass',
      amount: 1999,
      date: 'April 03, 2026',
      status: 'Success',
      method: 'Credit Card',
      transactionId: 'TXN-AXP-438710'
    },
    {
      invoice: 'INV-2026-0871',
      courseName: 'Finance Fundamentals for Startups',
      amount: 1499,
      date: 'March 21, 2026',
      status: 'Pending',
      method: 'Net Banking',
      transactionId: 'TXN-AXP-432116'
    },
    {
      invoice: 'INV-2026-0733',
      courseName: 'Graphic Design for Brand Campaigns',
      amount: 1799,
      date: 'February 11, 2026',
      status: 'Success',
      method: 'Debit Card',
      transactionId: 'TXN-AXP-420883'
    }
  ];

  get totalPaid(): number {
    return this.payments
      .filter((payment) => payment.status === 'Success')
      .reduce((total, payment) => total + payment.amount, 0);
  }

  get pendingAmount(): number {
    return this.payments
      .filter((payment) => payment.status === 'Pending')
      .reduce((total, payment) => total + payment.amount, 0);
  }

  get successfulPayments(): number {
    return this.payments.filter((payment) => payment.status === 'Success').length;
  }
}
