import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `<app-server></app-server> <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  userName: string = '';
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName: string = '';
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created, ' + ' the server is' + this.serverName + '!';
    setTimeout(() => {
      this.serverCreated = false;
    }, 4000);
  }
  // onUpdateServerName(event: any) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  resetUser() {
    this.userName = '';
  }
}
