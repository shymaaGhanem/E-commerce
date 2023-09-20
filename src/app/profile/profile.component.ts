import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit ,OnDestroy ,OnChanges {
@Input() userName:string='';
  constructor(){
    console.log('this is constructor') 
  }
  
    myInterval:any;
    ngOnInit(): void {
     console.log('this is ng on intit')  
     let demo=document.querySelector('.demo')
     console.log(demo)
    this.myInterval= setInterval(()=>{
     console.log('hello')
     },1000)
    }
  //break 8:35 
  ngOnDestroy(): void {
    console.log('this destroy')
    clearInterval(this.myInterval)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
    console.log('this onchange')
  }
  
}
