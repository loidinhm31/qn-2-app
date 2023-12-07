import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  async setItem(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  async getItem(key: string) {
    return this._storage?.get(key);
  }

  async removeItem(key: string) {
    await this._storage?.remove(key);
  }

  async clearItems() {
    await this._storage?.clear();
  }
}
