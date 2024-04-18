import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';
import { ViewUserDetailsComponent } from './components/view-user-details/view-user-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  tableResponse: any;
  tableData: any[] = [];
  searchKey: string = ''
  page = 1;
  size = 10;

constructor(private _UsersService: UsersService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {

    let paramsApi = {
      page : this.page,
      size:this.size
    }

    this._UsersService.getAllUsers(paramsApi).subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res;
        this.tableData = res.data.users;
      }
    })
  }

  openUserDetailes(item: any) {
    const dialogRef = this.dialog.open(ViewUserDetailsComponent, {
      width: "50%",
      data:item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      
    });
  }

}
