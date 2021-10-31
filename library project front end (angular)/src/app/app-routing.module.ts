import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './general/error404/error404.component';
import { HomeComponent } from './general/home/home.component';
import { AddAutherComponent } from './pages/admin/add-auther/add-auther.component';
import { AddBookDataComponent } from './pages/admin/add-book-data/add-book-data.component';
import { AddBookPdfComponent } from './pages/admin/add-book-pdf/add-book-pdf.component';
import { AddUserComponent } from './pages/admin/add-user/add-user.component';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { DeleteAutherComponent } from './pages/admin/delete-auther/delete-auther.component';
import { DeleteBookComponent } from './pages/admin/delete-book/delete-book.component';
import { DeleteUserComponent } from './pages/admin/delete-user/delete-user.component';
import { EditAutherComponent } from './pages/admin/edit-auther/edit-auther.component';
import { EditUserComponent } from './pages/admin/edit-user/edit-user.component';
import { ShowAllAuthersComponent } from './pages/admin/show-all-authers/show-all-authers.component';
import { showallBooksComponent } from './pages/admin/show-all-books/show-all-books.component';
import { ShowAllUsersComponent } from './pages/admin/show-all-users/show-all-users.component';
import { ShowSingleAutherComponent } from './pages/admin/show-single-auther/show-single-auther.component';
import { showsinglebookComponent } from './pages/admin/show-single-book/show-single-book.component';
import { ShowSingleUserComponent } from './pages/admin/show-single-user/show-single-user.component';
import { ActivateComponent } from './pages/user/activate/activate.component';
import { EditProfileComponent } from './pages/user/edit-profile/edit-profile.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { Register2Component } from './pages/user/register2/register2.component';
import { ShowAllBooksComponent } from './pages/user/show-all-books/show-all-books.component';
import { ShowMyBooksComponent } from './pages/user/show-my-books/show-my-books.component';
import { ShowSingleBookComponent } from './pages/user/show-single-book/show-single-book.component';
import { ShowallauthersComponent } from './pages/user/showallauthers/showallauthers.component';
import { ShowsingleautherComponent } from './pages/user/showsingleauther/showsingleauther.component';
import { IsAdminGuard } from './providers/gaurd/is-admin.guard';
import { LoggedGuard } from './providers/gaurd/logged.guard';
import { NotLoggedGuard } from './providers/gaurd/not-logged.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "user", children: [
      { path: "", component: ProfileComponent, canActivate: [LoggedGuard] },
      { path: "profile", component: ProfileComponent, canActivate: [LoggedGuard] },
      { path: "register", component: RegisterComponent },
      { path: "register2", component: Register2Component, canActivate: [LoggedGuard] },
      { path: "activate/:id", component: ActivateComponent, canActivate: [LoggedGuard] },
      { path: "login", component: LoginComponent, canActivate: [NotLoggedGuard] },
      { path: "editProfile1", component: EditProfileComponent, canActivate: [LoggedGuard] },
      { path: "showMyBooks", component: ShowMyBooksComponent, canActivate: [LoggedGuard] },
      { path: "showAllBooks", component: ShowAllBooksComponent, canActivate: [LoggedGuard] },
      { path: "showallauthers", component: ShowallauthersComponent, canActivate: [LoggedGuard] },


    ]
  },
  {
    path: "admin", children: [
      { path: "adminprofile", component: AdminProfileComponent, canActivate: [IsAdminGuard] },
      { path: "addUser", component: AddUserComponent, canActivate: [IsAdminGuard] },
      { path: "login", component: AdminLoginComponent, canActivate: [IsAdminGuard] },
      { path: "showAllUsers", component: ShowAllUsersComponent, canActivate: [IsAdminGuard] },
      { path: "showSingleUser/:id", component: ShowSingleUserComponent, canActivate: [IsAdminGuard] },
      { path: "deleteUser/:id", component: DeleteUserComponent, canActivate: [IsAdminGuard] },
      { path: "editProfile/:id", component: EditUserComponent, canActivate: [IsAdminGuard] },

      { path: "addBook/:id", component: AddBookDataComponent, canActivate: [IsAdminGuard] },
      { path: "addPdf/:id", component: AddBookPdfComponent, canActivate: [IsAdminGuard] },
      { path: "showAllBooks", component: showallBooksComponent, canActivate: [IsAdminGuard] },
      { path: "deleteBook/:id", component: DeleteBookComponent, canActivate: [IsAdminGuard] },
      { path: "showsinglebook/:id", component: showsinglebookComponent, canActivate: [IsAdminGuard] },

      { path: "addAuthre", component: AddAutherComponent, canActivate: [IsAdminGuard] },
      { path: "editAuthre/:id", component: EditAutherComponent, canActivate: [IsAdminGuard] },
      { path: "showAllAuthers", component: ShowAllAuthersComponent, canActivate: [IsAdminGuard] },
      { path: "deleteAuthre/:id", component: DeleteAutherComponent, canActivate: [IsAdminGuard] },
      { path: "showSingleAuthre/:id", component: ShowSingleAutherComponent, canActivate: [IsAdminGuard] }








    ]
  },
  { path: "**", component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
