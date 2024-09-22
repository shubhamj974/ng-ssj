import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private _authServices: AuthService) {}

  ngOnInit(): void {}

  onLogout(start: string, exist: string) {
    this._authServices.logOut(start, exist);
  }
}
