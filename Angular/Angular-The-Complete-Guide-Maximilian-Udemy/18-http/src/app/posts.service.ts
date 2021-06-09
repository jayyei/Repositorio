import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class PostsService {

	error = new Subject<string>();

	constructor( private httpClient: HttpClient){}
  
	createAndStorePost( title: string, content: string) {
		const postData: Post = { title, content}
		this.httpClient.post< {name: string} >(
      'https://ng-complete-guide-91935-default-rtdb.firebaseio.com/posts.json',
      postData,
			{
				observe: 'response'
			}
    ).subscribe( responseData => {
      console.log(responseData)
    }, error => {
			this.error.next(error.message)
		});
	}

	fetchPosts() {
		let  searchParams = new HttpParams();
		searchParams = searchParams.append('print', 'pretty');
		searchParams = searchParams.append('custom', 'key');
		return this.httpClient.get<{[key: string]: Post}>(
			'https://ng-complete-guide-91935-default-rtdb.firebaseio.com/posts.json',
			{
				headers: new HttpHeaders({'Custom-header': 'Hello'}),
				params: searchParams,
				responseType: 'json'
			}
			)
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key))
            postsArray.push({...responseData[key], id: key})
          }
          return postsArray
        }),
				catchError( errorResponse => {
					return throwError(errorResponse)
				})
      )
	}

	deletePosts() {
		return this.httpClient.delete(
			'https://ng-complete-guide-91935-default-rtdb.firebaseio.com/posts.json',
			{
				// observe: 'body', 'response', 'events'
				observe: 'events',
				responseType: 'text'
			}
		).pipe(tap(event => {
			console.log(event);
			if (event.type === HttpEventType.Sent) {
				//...
			}
			if (event.type === HttpEventType.Response) {
				console.log(event.body);
			}
		}))
	 }
}