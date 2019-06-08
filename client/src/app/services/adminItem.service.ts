import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

import { ItemModel } from "../models/item.model";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class AdminitemService {
  private itemModels: ItemModel[] = [];
  private itemModelsUpdated = new Subject<ItemModel[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getItemModels() {
    this.http
      .get<{ message: string; itemModels: any }>(
        "http://localhost:3000/api/posts"
      )
      .pipe(map((itemModelData) => {
        return itemModelData.itemModels.map(item => {
          return {
            name: item.name,
            code:item.code,
            price: item.price,
            date: item.date,
            id: item._id
          };
        });
      }))
      .subscribe(transformedItems => {
        this.itemModels = transformedItems;
        this.itemModelsUpdated.next([...this.itemModels]);
      });
  }

  getItemUpdateListener() {
    return this.itemModelsUpdated.asObservable();
  }

  //fetching the post to edit
  getItem(id: string){
   return this.http.get<{_id: string , name: string ,code: string, price: string ,date: Date }>(
     "http://localhost:3000/api/posts/" + id);
  }


  addItem( name: string,code:string,price:string,date:Date) {
    const item: ItemModel = { _id: null, name: name,code:code, price: price,date:date };
    this.http
      .post<{ message: string, itemId: string }>("http://localhost:3000/api/posts", item)
      .subscribe(responseData => {
        const id = responseData.itemId;
        item._id = id;
        this.itemModels.push(item);
        this.itemModelsUpdated.next([...this.itemModels]);
        this.router.navigate(["/"]);
      });
  }

  updateItem(id: string, title: string,code:string, price: string,date:Date){
      const item: ItemModel = { _id:id,name:name,code:code,price:price,date:date};
      this.http.put("http://localhost:3000/api/posts/" + id, item)
      .subscribe(response => {
        const updatedItems = [...this.itemModels];
        const oldItemIndex = updatedItems.findIndex( p => p._id === item._id);
        updatedItems[oldItemIndex] = item;
        this.itemModels = updatedItems;
        this.itemModelsUpdated.next([...this.itemModels]);
        this.router.navigate(["/"]);
      });
  }

  deleteItem(itemId: string) {
    this.http.delete("http://localhost:3000/api/posts/" + itemId)
      .subscribe(() => {
        const updatedItems = this.itemModels.filter(item => item._id !== itemId);
        this.itemModels = updatedItems;
        this.itemModelsUpdated.next([...this.itemModels]);
      });
  }
}
