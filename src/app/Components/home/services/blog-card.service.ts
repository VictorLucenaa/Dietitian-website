import { Injectable } from '@angular/core';
import { IblogCard } from '../interfaces/iblogCard.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogCardService {
  cardsLeftContent: IblogCard[] = [
    {
      logo: 'assets/images/home/blog/top-left-card.jpeg',
      headerText: 'Weight Loss',
      mainText: 'The Benefits of Hydration for Weight Loss',
      secondaryText:
        'Discover how staying hydrated can support your weight loss goals and improve overall health.',
      authorImage: 'assets/images/home/blog/top-left-icon.jpeg',
      authorName: 'Emily Johnson',
      postDate: '23 May 2023 - 5 min read',
      postLike: 'assets/images/home/blog/like-icon.jpeg',
      postSave: 'assets/images/home/blog/save-icon.jpeg',
    },
    {
      logo: 'assets/images/home/blog/bottom-left-card.jpeg',
      headerText: 'Understanding Macronutrients',
      mainText: 'Carbohydrates, Proteins, and Fats',
      secondaryText:
        'Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.',
      authorImage: 'assets/images/home/blog/bottom-left-icon.jpeg',
      authorName: 'Mark Wilson',
      postDate: '23 May 2023 - 5 min read',
      postLike: 'assets/images/home/blog/like-icon.jpeg',
      postSave: 'assets/images/home/blog/save-icon.jpeg',
    },
  ];

  cardsRightContent: IblogCard[] = [
    {
      logo: 'assets/images/home/blog/top-right-card.jpeg',
      headerText: 'Mindful Eating',
      mainText: 'Cultivating a Healthy Relationship with Food',
      secondaryText:
        'Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.',
      authorImage: 'assets/images/home/blog/top-right-icon.jpeg',
      authorName: 'Sarah Thompson',
      postDate: '23 May 2023 - 5 min read',
      postLike: 'assets/images/home/blog/like-icon.jpeg',
      postSave: 'assets/images/home/blog/save-icon.jpeg',
    },
    {
      logo: 'assets/images/home/blog/bottom-right-card.jpeg',
      headerText: 'Healthy Snacks on the Go',
      mainText: 'Quick and Nutritious Options',
      secondaryText:
        'Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.',
      authorImage: 'assets/images/home/blog/bottom-right-icon.jpeg',
      authorName: 'Emily Johnson',
      postDate: '23 May 2023 - 5 min read',
      postLike: 'assets/images/home/blog/like-icon.jpeg',
      postSave: 'assets/images/home/blog/save-icon.jpeg',
    },
  ];

  getLeftCardsContent() {
    return this.cardsLeftContent;
  }
  getRightCardsContent() {
    return this.cardsRightContent;
  }

  constructor() {}
}
