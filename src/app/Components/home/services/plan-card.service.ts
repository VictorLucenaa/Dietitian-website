import { Injectable } from '@angular/core';
import { ICardPlan } from '../interfaces/IcardPlan.interface';

@Injectable({
  providedIn: 'root',
})
export class PlanCardService {
  planData: ICardPlan[] = [
    {
      planType: 'Basic',
      planContent:
        'Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.',
      planPrice: 49,
    },
    {
      planType: 'Premium',
      planContent: `Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.`,
      planPrice: 79,
    },
    {
      planType: 'Ultimate',
      planContent:
        'Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.',
      planPrice: 99,
    },
  ];


  constructor() {}

  getPlanData (){
    return this.planData;
  }
}
