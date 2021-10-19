import { Component, OnInit } from '@angular/core';
import { GitService } from '../gitservice.service';
import { Tusa } from '../tusa';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users!: Tusa;
  gitservice: GitService;
  userdetails!:any[];
 
  constructor(gitservice: GitService) {
    this.gitservice= gitservice
   }

  ngOnInit(): void {
    this.users=this.gitservice.user
    this.userdetails=this.gitservice.tusadata
  }

}
