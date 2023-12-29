import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { Permission, User, UserPermission } from './entities/entities';
import { UserPermissionViewDto } from './entities/dtos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuComponent,
    CommonModule,
    FormsModule,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple';
  searchText:string=""
  userList:User[]=[
    {
      id:1,
      firstName:"Yakup",
      lastName:"Eyisan",
      age:28
    },
    {
      id:2,
      firstName:"Bahri",
      lastName:"Baş",
      age:23
    },
    {
      id:3,
      firstName:"Ahmet",
      lastName: "Özenir",
      age:25
    }
  ]
  permissionList:Permission[]=[
    {
      id:1,
      name:"Supervisor"
    },
    {
      id:2,
      name:"Admin"
    },
    {
      id:3,
      name:"Guest"
    }
  ]
  userPermissionList:UserPermission[]=[
    {
      id:1,
      userId:1,
      permissionId:1
    },
    {
      id:2,
      userId:2,
      permissionId:2
    },
    {
      id:3,
      userId:2,
      permissionId:3
    }
  ]

  getUserById(id:number):User|undefined{
    return this.userList.find(user=>user.id==id)
  }
  getPermissionById(id:number):Permission|undefined{
    return this.permissionList.find(permission=>permission.id==id)
  }
  makeMask(text:string):string{
    return text.substring(0,2)+"***";
  }
  getUserPermissionListBySearch():UserPermissionViewDto[]{
    let userPermissionViewList:UserPermissionViewDto[]=
    this.userPermissionList.map(userPermission=>{
      let user=this.getUserById(userPermission.userId);
      let permission=this.getPermissionById(userPermission.permissionId);
      let userPermissionViewDto:UserPermissionViewDto={
        id:userPermission.id,
        userId:userPermission.userId,
        permissionId:userPermission.permissionId,
        userFullName:user?.firstName+' '+user?.lastName,
        permissionName:permission?.name??''
      }
      return userPermissionViewDto
    })
    return userPermissionViewList.filter(
      userPermission=>
        this.searchText=="" ||
        (
          userPermission.permissionId.toString()==this.searchText ||
          userPermission.userId.toString()==this.searchText ||
          userPermission.userFullName.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
          userPermission.permissionName.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
        )
      )
  }
}



// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     FormsModule,
//     CommonModule,
//     RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'simple';
//   text: String = "Enes Sahin"
//   num1: number = 1;
//   n: number = 1
//   x: number = 0
//   y: number = 0
//   z: number = 0

//   bolunen: number = 0
//   bolen: number = 0
//   bolum: number = 0
//   kalan: number = 0


//   // getString() {
//   //   return this.num1 % 2 == 0 ? "Çift" : "Tek";
//   // }

//   // addOne() {
//   //   this.num1 += 1;
//   // }

//   // onSearchChange(searchValue: string): void {
//   //   console.log(searchValue);
//   // }

//   // getList() {
//   //   let list: number[] = []

//   //   for (let i = this.x; i <= this.n; i++) {
//   //     list.push(i)
//   //   }
//   //   return list
//   // }

//   // 2. Soru
//   // getFibonacci() {
//   //   let list: number[] = [1, 1];
//   //   while (list[list.length - 1] + list[list.length - 2] < this.fLimit && this.fLimit > 1) {
//   //     console.log(list, list[list.length - 2], list[list.length - 1])
//   //     list.push(list[list.length - 1] + list[list.length - 1])
//   //   }

//   //   return (this.fLimit < 2) ? [] : list
//   // }

//   // 3. Soru
//   //   getList() {
//   //     let list: number[] = []
//   //     for(let i=1; i<this.x; i++){
//   //       if(this.x%i==0){
//   //         list.push(i,i*-1);
//   //       }
//   //     }
//   //     return list;
//   //   }

//   // 4. Soru
//   //   sayi1: number = 0
//   //   sayi2: number = 0
//   //   sayi3: number = 0

//   //   ortanca() {
//   //     return [this.sayi1,this.sayi2,this.sayi3].sort((x,y)=>x-y)[1]
//   //   }


//   // 5. Soru
//   // bolmedenBol() {
//   //   this.bolum = 0;
//   //   let bolunen: number = this.bolunen

//   //   while (bolunen >= this.bolen && bolunen != 0 && this.bolen != 0) {
//   //     bolunen -= this.bolen;
//   //     this.kalan = bolunen
//   //     this.bolum++;
//   //   }
//   //   return this.kalan
//   // }


//   // 6. Soru
//   // sayi1: number = 0
//   // sayi2: number = 0
//   // carpmadanCarp() {
//   //   let carp1: number = this.sayi1;
//   //   let carp2: number = this.sayi2;
//   //   let sonuc: number = 0

//   //   for (let i = 0; i < carp2; i++) {
//   //     sonuc += carp1;
//   //   }
//   //   return sonuc
//   // }


//   ortalamaHesap() {
//     if (this.n !== 0) {

//     }
//   }



// }


