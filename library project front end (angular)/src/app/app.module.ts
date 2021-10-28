import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

// import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ActivateComponent } from './pages/user/activate/activate.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { EditProfileComponent } from './pages/user/edit-profile/edit-profile.component';
import { ShowMyBooksComponent } from './pages/user/show-my-books/show-my-books.component';
import { ShowAllBooksComponent } from './pages/user/show-all-books/show-all-books.component';
import { ShowSingleBookComponent } from './pages/user/show-single-book/show-single-book.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './general/home/home.component';
import { Error404Component } from './general/error404/error404.component';
import { Register2Component } from './pages/user/register2/register2.component';
import { GlobalService } from './providers/services/global.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './providers/interceptors/auth.interceptor';
import { ShowallauthersComponent } from './pages/user/showallauthers/showallauthers.component';
import { ShowsingleautherComponent } from './pages/user/showsingleauther/showsingleauther.component';
import { AddUserComponent } from './pages/admin/add-user/add-user.component';
import { EditUserComponent } from './pages/admin/edit-user/edit-user.component';
import { DeleteUserComponent } from './pages/admin/delete-user/delete-user.component';
import { ShowAllUsersComponent } from './pages/admin/show-all-users/show-all-users.component';
import { ShowSingleUserComponent } from './pages/admin/show-single-user/show-single-user.component';
import { AddBookDataComponent } from './pages/admin/add-book-data/add-book-data.component';
import { AddBookPdfComponent } from './pages/admin/add-book-pdf/add-book-pdf.component';
import { DeleteBookComponent } from './pages/admin/delete-book/delete-book.component';
import { AddAutherComponent } from './pages/admin/add-auther/add-auther.component';
import { EditAutherComponent } from './pages/admin/edit-auther/edit-auther.component';
import { ShowAllAuthersComponent } from './pages/admin/show-all-authers/show-all-authers.component';
import { ShowSingleAutherComponent } from './pages/admin/show-single-auther/show-single-auther.component';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { DeleteAutherComponent } from './pages/admin/delete-auther/delete-auther.component';
import { Navbar2Component } from './shared/navbar2/navbar2.component';
import { showallBooksComponent } from './pages/admin/show-all-books/show-all-books.component';
import { showsinglebookComponent } from './pages/admin/show-single-book/show-single-book.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ActivateComponent,
    ProfileComponent,
    EditProfileComponent,
    ShowMyBooksComponent,
    ShowAllBooksComponent,
    showallBooksComponent,
    ShowSingleBookComponent,
    showsinglebookComponent,
    AdminComponent,

    NavbarComponent,
    FooterComponent,
    HomeComponent,
    Error404Component,
    Register2Component,
    ShowallauthersComponent,
    ShowsingleautherComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ShowAllUsersComponent,
    ShowSingleUserComponent,
    AddBookDataComponent,
    AddBookPdfComponent,
    DeleteBookComponent,
    AddAutherComponent,
    EditAutherComponent,
    ShowAllAuthersComponent,
    ShowSingleAutherComponent,
    AdminLoginComponent,
    DeleteAutherComponent,
    Navbar2Component,
    AdminProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    PdfViewerModule
    // CommonModule,
    // BrowserAnimationsModule,
    // ToastrModule.forRoot()
  ],
  providers: [GlobalService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
