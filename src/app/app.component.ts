import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'e-commerce';
  
  constructor(private _Route:Router,private _Title:Title){
  
  }
  ngOnInit(): void {
   this._Route.events.subscribe((e)=>{
   if(e instanceof NavigationEnd){
   let string = e.url,
   result = string.replace('/',"|")
   this._Title.setTitle(`freshCart ${result}`)
   }
   })
  }
  
}
