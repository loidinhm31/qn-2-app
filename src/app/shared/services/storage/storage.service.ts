import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init().then(
      () => {
        console.log("Storage was initialized");
      },
    );
  }

  async init() {
    if (!this._storage) {
      this._storage = await this.storage.create();
    }
  }

  async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  public async get(key: string): Promise<any> {
    return this._storage?.get(key);
  }

  async remove(key: string) {
    await this._storage?.remove(key);
  }

  async clear() {
    await this._storage?.clear();
  }
}
