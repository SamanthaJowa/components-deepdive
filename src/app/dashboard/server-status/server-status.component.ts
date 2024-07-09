import { Component, OnInit } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
    selector: 'app-server-status',
    standalone: true,
    templateUrl: './server-status.component.html',
    styleUrl: './server-status.component.css',
    imports: [DashboardItemComponent],
    host:{
      id: 'status'
    }
})
export class ServerStatusComponent implements OnInit{
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline'

  ngOnInit(){
    setInterval(() => {
      const rnd = Math.random();
      if(rnd < 0.5){
        this.currentStatus = 'online'
      }else if(rnd < 0.9){
        this.currentStatus = "offline"
      }else{
        this.currentStatus = "unknown"
      }
    }, 5000)
  }
}
