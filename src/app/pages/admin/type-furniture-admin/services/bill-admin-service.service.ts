import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs';
import { BillManage } from '../bill-manage/bill';
import { ResponseAPINoContent } from 'src/app/common/types/response-api';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BillDetailManage } from '../bill-manage/bill-details';

@Injectable({
  providedIn: 'root',
})
export class BillAdminService {
  isBillByStatus = new BehaviorSubject(false);
  listBill = new BehaviorSubject<BillManage[]>([]);

  listBillDetail = new BehaviorSubject<BillDetailManage[]>([]);

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

  public updateBill(bill: BillManage): Observable<BillManage> {
    // return this.http.put<BillManage>(
    //   `http://localhost:8080/api/bill/updateBill`,
    //   bill
    // );
    console.log('Updating Bill:', bill); // Log để kiểm tra dữ liệu bạn đang gửi
    return this.http
      .put<BillManage>(`http://localhost:8080/api/bill/updateBill`, bill)
      .pipe(
        catchError((error) => {
          console.error('Update failed:', error);
          throw error;
        })
      );
  }

  // public getBillDetails(billId: number): Observable<BillDetailManage[]> {
  //   return this.http
  //     .get<ResponseAPINoContent<BillDetailManage[]>>(
  //       `http://localhost:8080/api/billDetail/getByBillId/${billId}`
  //     )
  //     .pipe(
  //       map((res) => res.data),
  //       tap((data) => {
  //         console.log('Bill details received:', data);
  //         this.listBillDetail.next(data);
  //       })
  //     );
  // }

  public getBillDetails(billId: number): Observable<BillDetailManage[]> {
    return this.http
      .get<BillDetailManage[]>(
        `http://localhost:8080/api/billDetail/getByBillId/${billId}`
      )
      .pipe(
        tap((data) => {
          console.log('Bill details received:', data);
          // this.listBillDetail.next(data);
        })
      );
  }
}
