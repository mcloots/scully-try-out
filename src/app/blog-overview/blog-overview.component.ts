import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogItemComponent } from '../blog-item/blog-item.component';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map, Observable } from 'rxjs';
import { Route } from '../interfaces/route';

@Component({
  selector: 'app-blog-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, BlogItemComponent],
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.css']
})
export class BlogOverviewComponent {
  constructor(private scully: ScullyRoutesService) {
  }

  readonly routes$: Observable<Route[]> = this.scully.available$.pipe(
    map(routes => {
      let blogRoutes = ((routes as Route[]) || []).filter(item =>
        item.route.toLowerCase().includes('blog') && item.published);

      const sortedBlogRoutes = blogRoutes.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
      return sortedBlogRoutes;
    }));
}
