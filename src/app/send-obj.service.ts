import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SendObjService {
  private itemData = new BehaviorSubject<any>({});
  itemData$ = this.itemData.asObservable();

  updateItem(data: any) {
    this.itemData.next(data);
  }
}
