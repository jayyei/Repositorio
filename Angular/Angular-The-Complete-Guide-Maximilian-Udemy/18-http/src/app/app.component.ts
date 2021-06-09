import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSubscription: Subscription

  constructor(private httpClient: HttpClient, private postsService: PostsService) {}

  ngOnInit() {

    this.errorSubscription = this.postsService.error.subscribe( errorMessage => {
      this.error = errorMessage
    })

    this.isFetching = true;
    this.postsService.fetchPosts().subscribe( posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error)
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // Si nadie esta interesado en el response (subcribe) entonces no habria porque hacer la peticion
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe( posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message
    });
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = []
    });
  }

  onHandleError() {
    this.error = null;
  }
  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }

}
