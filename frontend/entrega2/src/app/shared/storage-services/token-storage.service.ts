import { Injectable } from '@angular/core';

const TOKEN_KEY_FIREBASE = 'authTokenFirebase';
const TOKEN_KEY = 'authToken';
const TOKEN_REFRESH_KEY = 'authTokenRefresh';
const TOKEN_TYPE = 'token_type'
const USERNAME_KEY = 'authUsername';
const COMPLETE_NAME_KEY = 'authCompletename';
const AUTHORITIES_KEY = 'authAuthorities';
const AUTHORITIES_ID = 'authId';
const AUTHORITIES_COMPANY_ID = 'companyId';
const TOKEN_PROFESSIONAL = 'professionalId';
const TOKEN_REFRESH_PROFESSIONAL = 'professionalId';
const AUTHORITIES_COMPANY_NAME = 'companyName'


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear()
  }
   public getProfessionalId(): string {
    window.sessionStorage.removeItem(TOKEN_REFRESH_PROFESSIONAL);
    return sessionStorage.getItem(TOKEN_PROFESSIONAL);
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveRefreshToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_REFRESH_KEY);
    window.sessionStorage.setItem(TOKEN_REFRESH_KEY, token);
  }

  public getRefreshToken(): string {
    return sessionStorage.getItem(TOKEN_REFRESH_KEY);
  }

  public saveToken_type(token: string) {
    window.sessionStorage.removeItem(TOKEN_TYPE);
    window.sessionStorage.setItem(TOKEN_TYPE, token);
  }

  public getToken_type(): string {
    return sessionStorage.getItem(TOKEN_TYPE);
  }

  public saveFirebaseToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY_FIREBASE);
    window.sessionStorage.setItem(TOKEN_KEY_FIREBASE, token);
  }

  public getFirebaseToken(): string {
    return sessionStorage.getItem(TOKEN_KEY_FIREBASE);
  }

  public saveCompleteName(completeName: string) {
    window.sessionStorage.removeItem(COMPLETE_NAME_KEY);
    window.sessionStorage.setItem(COMPLETE_NAME_KEY, completeName);
  }

  public getCompleteName(): string {
    return sessionStorage.getItem(COMPLETE_NAME_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public saveID(id: string) {
    window.sessionStorage.removeItem(AUTHORITIES_ID);
    window.sessionStorage.setItem(AUTHORITIES_ID, id);
  }

  public getId(): string {
    return sessionStorage.getItem(AUTHORITIES_ID);
  }

  public saveIdCompany(id: string) {
    window.sessionStorage.removeItem(AUTHORITIES_COMPANY_ID);
    window.sessionStorage.setItem(AUTHORITIES_COMPANY_ID, id);
  }

  public getCompanyId(): string {
    return sessionStorage.getItem(AUTHORITIES_COMPANY_ID);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, authorities);
  }
  
  public saveCompanyName(name: string) {
    window.sessionStorage.removeItem(AUTHORITIES_COMPANY_NAME);
    window.sessionStorage.setItem(AUTHORITIES_COMPANY_NAME, name);
  }

  public getCompanyName(): string {
    return sessionStorage.getItem(AUTHORITIES_COMPANY_NAME);
  }

  public getAuthorities(): string {
    try {
      if (sessionStorage.getItem(TOKEN_KEY)) {
        return sessionStorage.getItem(AUTHORITIES_KEY);
      }
    } catch (error) {
    }
  }
}
