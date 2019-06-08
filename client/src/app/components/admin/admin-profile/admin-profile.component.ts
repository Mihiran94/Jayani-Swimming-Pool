import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import {currentUser} from '../../../models/currentUser.model'

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  curUser :currentUser
  constructor(private auth :AuthService) { }

  ngOnInit() {
    this.auth.getDashBoard().subscribe(data => {
      this.curUser = data as currentUser
        console.log(this.curUser)

    });
  }
}
