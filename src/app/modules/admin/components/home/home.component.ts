import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';

import Chart from 'chart.js/auto';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  chart :any = [];
  
bookings:any;
users:any;
mainObject:any;
x={
  m:10,
  s:20
}
constructor(private adminServ:AdminService){



}

ngOnInit(): void {

  this.getAllCharts()
  // this.isChart(this.x,'canvas','bar')

}
getAllCharts(){
this.adminServ.getCharts().subscribe({
  next:(res)=>{
console.log(res.data);
this.bookings=res.data.bookings;
this.users=res.data.users;
console.log(this.bookings,this.users);
this.mainObject={
  ads:res.data.ads,
  bookings:this.bookings.pending+this.bookings.completed,
  facilities:res.data.facilities,
  rooms:res.data.rooms,
  users:this.users.admin+this.users.user

}
console.log(this.mainObject);



 






this.isChart(this.bookings,'canvas','polarArea')
this.isChart(this.users,'canvasU','doughnut')
this.isChart(this.mainObject,'canvasM','polarArea')



},
  error:(err)=>{
console.log(err);

  },
  complete:()=>{

  }
})

}


isChart(res:any,canv:string,Itype:any){
  //  let chartsNum= res;
  let chartsNum=Object.entries(res)
  let Result=new Map(chartsNum);
  //console.log(...Result.keys());
  //console.log(...Result.values());
    this.chart = new Chart(canv, {  
      type: Itype,
      data: {
        labels: [...Result.keys()],
        datasets: [
          {
            label: '# of Votes',
            data: [...Result.values()
  
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

}
