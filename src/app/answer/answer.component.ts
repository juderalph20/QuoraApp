import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- Add this line

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule], // <-- Add RouterModule here
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {
  questions = [
     {
    title: 'Is artificial intelligence ruining Quora?',
    answers: 37,
    followers: 27,
    lastFollowed: '1h'
  },
  {
    title: 'Can a person that never fights be good at fighting?',
    answers: 109,
    followers: 33,
    lastFollowed: 'Jun 8'
  },
  {
    title: 'What is the most underrated skill that people should learn?',
    answers: 48,
    followers: 92,
    lastFollowed: '3h'
  },
  {
    title: 'What is a fact that sounds fake but is actually true?',
    answers: 202,
    followers: 75,
    lastFollowed: 'Yesterday'
  },
  {
    title: 'Why do introverts hate phone calls?',
    answers: 51,
    followers: 40,
    lastFollowed: 'Jun 15'
  },
  {
    title: 'What are some examples of “you have no power here” moments?',
    answers: 87,
    followers: 61,
    lastFollowed: '2d'
  },
  {
    title: 'What’s a subtle sign someone is highly intelligent?',
    answers: 135,
    followers: 120,
    lastFollowed: '4h'
  },
  {
    title: 'How would the world change if humans had 3 arms?',
    answers: 19,
    followers: 13,
    lastFollowed: 'Jun 16'
  },
  {
    title: 'What is something you’ve never told anyone?',
    answers: 170,
    followers: 89,
    lastFollowed: '1d'
  },
  {
    title: 'How did ancient civilizations lift huge stones?',
    answers: 98,
    followers: 52,
    lastFollowed: 'Jun 13'
  }
];
}