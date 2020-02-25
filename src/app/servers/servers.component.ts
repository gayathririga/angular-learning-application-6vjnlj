import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created.";
  serverName = "Two way binding works";
  serverCreated = false;

  constructor() {
    setTimeout(()=> {
     this.allowNewServer = true; 
    }, 2000);
   }
  
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created. Name is '+ this.serverName ;
  }

  onUpdateServer(event: any){
    this.serverName = event.target.value;
  }

  ngOnInit() {
  }

}