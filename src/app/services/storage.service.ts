import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public getItem<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key)) as T;
  }

  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public hasItem(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}
