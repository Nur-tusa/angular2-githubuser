import { Component, OnInit } from '@angular/core';
import { GitService } from '../gitservice.service';
import { Tusa } from '../tusa';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  users!: Tusa;
  gitservice: GitService;
  username:any;
  pushusername(){
    this.gitservice.Request(this.username)
  }

  constructor(gitservice: GitService) { 
    this.gitservice = gitservice
  }

  ngOnInit():void{
    this.users=this.gitservice.user
  }

}
