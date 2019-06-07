import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import {currentUser} from '../../models/currentUser.model'
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
curUser :currentUser
  constructor(private auth :AuthService) { }

  ngOnInit() {
    this.auth.getDashBoard().subscribe(data => {
      this.curUser = data as currentUser
        console.log(this.curUser)

    });
  }


}
