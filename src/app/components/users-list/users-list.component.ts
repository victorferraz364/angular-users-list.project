import { UsersList } from 'src/app/data/users-list';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent {
 
 displayedColumns: string[] = ['nome', 'dataCadastro', 'status'];

 @Input({ required:true }) usersList: IUser[] = [];

@Output('userSelected') userSelectedEmit = new EventEmitter<IUser>();

 onUserSelected(user: IUser) {
  console.log(user)
  this.userSelectedEmit.emit(user);
 }
}