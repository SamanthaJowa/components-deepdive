import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
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
  currentStatus= signal<'online' | 'offline' | 'unknown'> ('offline') 

  private destroyRef = inject(DestroyRef)

  constructor(){
    effect(() => {
      console.log(this.currentStatus())
    })
    
  }

  ngOnInit(){
    console.log('ON INIT')

    const interval = setInterval(() => {
      const rnd = Math.random();
      if(rnd < 0.5){
        this.currentStatus.set('online')
      }else if(rnd < 0.9){
        this.currentStatus.set('offline')
      }else{
        this.currentStatus.set('unknown')
      }
    }, 5000)

    this.destroyRef.onDestroy(() => {
      clearInterval(interval)
    })
  }
  ngAfterViewInit(){
    console.log('AFTER VIEW INIT')
  }

  

}
