import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Route } from '../interfaces/route';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent {
  @Input() route?: Route;
}
