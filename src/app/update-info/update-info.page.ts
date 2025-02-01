import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.page.html',
  styleUrls: ['./update-info.page.scss'],
  standalone: false
})
export class UpdateInfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
