import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "TestServer";
  serverCreated =false;
  servers =['TestServer','TestServer 2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)

  }
  ngOnInit() { }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is '+this.serverName;
    // if (this.serverCreationStatus === 'Server was created') {
    //   this.serverCreationStatus = 'No server was created';
    // } else {
    //   this.serverCreationStatus = 'Server was created! Name is '+this.serverName;
    //   // this.serverCreationStatus = '<app-server></app-server>';
    // }
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
