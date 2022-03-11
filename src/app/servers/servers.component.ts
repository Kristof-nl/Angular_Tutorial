import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreactionStatus: string = "No server was found";
  serverName = "";

  constructor()  {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreactionStatus = "Server was created";
  }
  onUpdateServerName(event :Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
