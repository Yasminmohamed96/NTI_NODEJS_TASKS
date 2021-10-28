import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public userData: any = null
  public isAuthed = false
  public isAdmin = false

  apiMainUrl = "http://localhost:3000/"
  constructor(private _http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this._http.post(`${this.apiMainUrl}user/register`, user)
  }
  login(user: any): Observable<any> {
    return this._http.post(`${this.apiMainUrl}user/login`, user)
  }
  profile(): Observable<any> {
    return this._http.post(`${this.apiMainUrl}user/profile`, null)
  }
  show_myBooks(): Observable<any> {
    return this._http.get(`${this.apiMainUrl}user/showMyBooks`)
  }
  showAllBooks(): Observable<any> {
    return this._http.get(`${this.apiMainUrl}user/showAllBooks`)
  }
  showallAuthers(): Observable<any> {
    return this._http.get(`${this.apiMainUrl}user/showAllAuthers`)
  }
  addbookToUser(user: any, id: any): Observable<any> {
    return this._http.post(`${this.apiMainUrl}user/addbookToUser/${id}`, user)
  }

  downloadMyBook(id: any): Observable<any> {
    return this._http.post(`${this.apiMainUrl}user/returnBookDist/${id}`, null)
  }

  showSingleAuther(): Observable<any> {
    return this._http.get(`${this.apiMainUrl}user/showSingleAuthre`)
  }
  showSingleBook(): Observable<any> {
    return this._http.get(`${this.apiMainUrl}user/showSingle`)
  }
  editMyProfile(user: any): Observable<any> {
    return this._http.patch(`${this.apiMainUrl}user/editProfile1/${user._id}}`, user)
  }

  ////////////////////////////////////////////////////////////////////////////////////
  addUser(user: any): Observable<any> {
    return this._http.post(`${this.apiMainUrl}admin/addUser`, user)
  }
  showAllusers(): Observable<any> {
    return this._http.get(`${this.apiMainUrl}admin/showAllUsers`)
  }
  editUserData(id: any, user: any): Observable<any> {
    return this._http.patch(`${this.apiMainUrl}admin/editProfile/${id}`, user)
  }
  deleteUserData(id: any): Observable<any> {
    return this._http.delete(`${this.apiMainUrl}admin/deleteUser/${id}`)
  }
  viewSingleUserData(id: any): Observable<any> {
    return this._http.post(`${this.apiMainUrl}admin/showSingleUser/${id}`, null)
  }
  //////////////////////////////////////////////////////////////////////////////
  addAuther(user: any): Observable<any> {
    return this._http.post(`${this.apiMainUrl}admin/addAuthre`, user)
  }
  showAuthers(): Observable<any> {
    return this._http.get(`${this.apiMainUrl}admin/showAllAuthers`)
  }
  editAuther(id: any, auther: any): Observable<any> {
    return this._http.patch(`${this.apiMainUrl}admin/editAuthre/${id}`, auther)
  }
  deleteAuther(id: any): Observable<any> {
    return this._http.delete(`${this.apiMainUrl}admin/deleteAuthre/${id}`)
  }
  viewSingleauther(id: any): Observable<any> {
    return this._http.get(`${this.apiMainUrl}admin/showSingleAuthre/${id}`)
  }
  ///////////////////////////////////////////////////////////////////////////////
  addbook(id: any, book: any): Observable<any> {
    return this._http.post(`${this.apiMainUrl}admin/addBook/${id}`, book)
  }
  addPdf(id: any, file: any): Observable<any> {
    // const myData = new FormData()
    // myData.append("img",file,  file.name)
    return this._http.patch(`${this.apiMainUrl}admin/addPdf/${id}`, file)
  }
  showallBooks(): Observable<any> {
    return this._http.get(`${this.apiMainUrl}admin/showAllBooks`)
  }
  deleteBooks(id: any): Observable<any> {
    return this._http.delete(`${this.apiMainUrl}admin/deleteBook/${id}`)
  }
  viewSingleBook(id: any): Observable<any> {
    return this._http.get(`${this.apiMainUrl}admin/showSingleBook/${id}`)
  }
  //
  ///////////////////////////////////////////////////////////////////////////////
  logout(): Observable<any> {
    return this._http.get(`${this.apiMainUrl}user/logout`)
  }
}
