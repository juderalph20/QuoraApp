import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

type Post = {
  author: string;
  role: string;
  date: string;
  title: string;
  content: string;
  image: string;
  profileImage: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor(private router: Router) {};
  searchTerm = '';
  searchResults: Post[] = [];
  posts: Post[] = [
    {
      author: 'Sangram Sagar',
      role: 'Lawyer',
      date: 'Feb 23',
      title: 'What is the most unfair thing in our society?',
      content: 'This boy had his whole life ahead of him...',
      image: 'assets/court.jpg',
      profileImage: 'assets/icon/profile1.jpg'
    },
    {
      author: 'Anna K.',
      role: 'AI Researcher',
      date: 'Mar 01',
      title: 'How does AI affect creative jobs?',
      content: 'As AI tools become more prevalent...',
      image: '',
      profileImage: 'assets/profile2.jpg'
    },
    {
      author: 'Priya Sharma',
      role: 'Teacher',
      date: 'Mar 10',
      title: 'Why is education important?',
      content: 'Education opens doors to better opportunities...',
      image: '',
      profileImage: 'assets/profile3.jpg'
    },
    {
      author: 'John Doe',
      role: 'Engineer',
      date: 'Mar 15',
      title: 'What are the latest trends in technology?',
      content: 'Technology is evolving rapidly with AI and IoT...',
      image: '',
      profileImage: 'assets/profile4.jpg'
    },
    {
      author: 'Maria Lopez',
      role: 'Doctor',
      date: 'Mar 20',
      title: 'How to maintain a healthy lifestyle?',
      content: 'A balanced diet and regular exercise are key...',
      image: '',
      profileImage: 'assets/profile5.jpg'
    }
  ];

  goToAnswer() {
    this.router.navigate(['/answer']);
  }

  goToCreatePost() {
    this.router.navigate(['/create-post']);
  }

  onSearch() {
    const term = this.searchTerm.trim().toLowerCase();
    if (term) {
      this.searchResults = this.posts.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.content.toLowerCase().includes(term)
      );
    } else {
      this.searchResults = [];
    }
  }
}