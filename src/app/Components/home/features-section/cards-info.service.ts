import { Injectable } from '@angular/core';
import { ICard } from './Icards.interface';

@Injectable({
  providedIn: 'root',
})
export class CardsInfoService {
  cardsInfo: ICard[] = [
    {
      logo: 'assets/images/home/features/flower-icon.jpeg',
      mainText: 'Personalized Nutrition Plans',
      secondaryText:
        'Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.',
      alt: 'Flower Icon',
    },
    {
      logo: 'assets/images/home/features/hat-icon.jpeg',
      mainText: 'Guidance from Certified Nutritionists',
      secondaryText:
        'Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.',
      alt: 'Hat Icon',
    },
    {
      logo: 'assets/images/home/features/cutlery-icon.jpeg',
      mainText: 'Food Tracking and Analysis',
      secondaryText:
        'Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.',
      alt: 'Cutlery Icon',
    },
    {
      logo: 'assets/images/home/features/clipboard-icon.jpeg',
      mainText: 'Meal Planning and Recipes',
      secondaryText:
        'Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.',
      alt: 'Clipboard Icon',
    },
    {
      logo: 'assets/images/home/features/dumbell-icon.jpeg',
      mainText: 'Lifestyle and Behavior Coaching',
      secondaryText:
        'Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.',
      alt: 'Dumbell Icon',
    },
    {
      logo: 'assets/images/home/features/backpack-icon.jpeg',
      mainText: 'Nutritional Education and Workshops',
      secondaryText:
        'Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.',
      alt: 'Backpack Icon',
    },
  ];

  constructor() {}

  getCardsInfo() {
    return this.cardsInfo;
  }
}
