import { Injectable } from '@angular/core';
import { Tusa } from './tusa';
import { HttpClient,  } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  user: Tusa;
  repository: Repo;
  data:any=[];
  tusadata:any= [];


  constructor(private http: HttpClient) {
    this.user = new Tusa("", "", "",0,0,0,0,"","","" );
    this.repository = new Repo("", "", "", "");
  }

 Request(username:any) {
    this.data.length=0;
    interface ApiResponse {
      avatar_url: any;
      login: string;
      bio: string;
      public_repos: number;
      public_gists: number;
      followers: number;
      following: number;
      url: string;
      location: string;
      email: string;
    }


    let promise = new Promise<ApiResponse>((resolve, reject) => {
      this.http.get<ApiResponse>(environment.baseUrl+username).toPromise().then(response => {
        this.user.profile_url=response.avatar_url
        this.user.login = response.login;
        this.user.bio = response.bio;
        this.user.public_repos=response.public_repos;
        this.user.public_gists= response.public_gists;
        this.user.tusafollowers=response.followers;
        this.user.tusafollowing=response.following;
        this.user.url=response.url;
        this.user.location=response.location;
        this.user.email=response.email;

        resolve(response)
      },
        error => {
          // this.user.login = "An error!!"
          // this.user.bio = "Bills"
          reject()
        })
        this.http.get<any>(environment.baseUrl+username+'/repos').toPromise().then(response =>{
          for (let i = 0; i < response.length; i++) {
            this.data = new Repo(response[i].html_url, response[i].name, response[i].description, response[i].language);
            this.tusadata.push(this.data);
          }
          resolve(response);
        },
          error => {
            reject(error);
  

        })
    })
    return promise
  }


}


