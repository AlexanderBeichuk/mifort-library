import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setLocalStorageItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getLocalStorageItem(key: string): string {
    return localStorage.getItem(key);
  }

  public removeLocalStorageItem(key: string): void {
    localStorage.removeItem(key);
  }
}
