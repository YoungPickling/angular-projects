import { Injectable } from "@angular/core";
import { URL } from "./app.component";
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Post } from "./post.model";
import { catchError, map, tap } from 'rxjs/operators'
import { Subject, throwError } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title:string, content: string) {
    const postData: Post = {title: title, content: content};
    this.http.post<{name: string, }>(
      URL + 'posts.json', 
      postData, 
      {
        observe: 'response'
      }
    ).subscribe(
      responseData => {
        console.log(responseData.body);
      }, error => {
        this.error.next(error.message);
      }
    );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print','pretty');
    return this.http
    .get<{[key: string]: Post}>(
      URL + 'posts.json', { 
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        // params: new HttpParams().set('print', 'pretty')
        params: searchParams,
        responseType: 'json'
    }).pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key})
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // Generic error handling
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      URL + 'posts.json',
      {
        observe: 'events',
        responseType: 'blob'
      }
    ).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Sent) {
        // ...
      } 
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }
}