import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { BillManage } from '../bill-manage/bill';
import { ResponseAPINoContent } from 'src/app/common/types/response-api';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BillAdminService {
  isBillByStatus = new BehaviorSubject(false);
  listBill = new BehaviorSubject<BillManage[]>([]);

  constructor(private http: HttpClient) {}

  public getBillBySTT0(): Observable<BillManage[]> {
    return this.http
      .get<ResponseAPINoContent<BillManage[]>>(
        'http://localhost:8080/api/bill/getBillStt0'
      )
      .pipe(
        map((res) => res.data),
        tap((data) => {
          if (this.isBillByStatus.value) {
            this.listBill.value;
          } else {
            this.listBill.next(data);
          }
        })
      );
  }

  public getBillBySTT1(): Observable<BillManage[]> {
    return this.http
      .get<ResponseAPINoContent<BillManage[]>>(
        'http://localhost:8080/api/bill/getBillStt1'
      )
      .pipe(
        map((res) => res.data),
        tap((data) => {
          if (this.isBillByStatus.value) {
            this.listBill.value;
          } else {
            this.listBill.next(data);
          }
        })
      );
  }

  public getBillBySTT2(): Observable<BillManage[]> {
    return this.http
      .get<ResponseAPINoContent<BillManage[]>>(
        'http://localhost:8080/api/bill/getBillStt2'
      )
      .pipe(
        map((res) => res.data),
        tap((data) => {
          if (this.isBillByStatus.value) {
            this.listBill.value;
          } else {
            this.listBill.next(data);
          }
        })
      );
  }

  public getBillBySTT3(): Observable<BillManage[]> {
    return this.http
      .get<ResponseAPINoContent<BillManage[]>>(
        'http://localhost:8080/api/bill/getBillStt3'
      )
      .pipe(
        map((res) => res.data),
        tap((data) => {
          if (this.isBillByStatus.value) {
            this.listBill.value;
          } else {
            this.listBill.next(data);
          }
        })
      );
  }
}
