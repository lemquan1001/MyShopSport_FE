import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from '../../types/card-item';
import {DetailProductServiceService} from "../../services/detail-product-service.service";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class CardItemComponent implements OnInit {

  listProductDetail = [];
  constructor(
    private router:Router,
    public detailFunitureService: DetailProductServiceService) { }

  ngOnInit() {
    // Gọi hàm để lấy dữ liệu từ service (tùy vào cách bạn lấy dữ liệu)
    this.getData();
  }
  detailItem(item: CardItem){
      this.detailFunitureService.getDetailProduct(item.id).subscribe((res: any) =>{
        this.detailFunitureService.dataDetail.next(res.data[0])
        console.log(this.detailFunitureService.dataDetail.value);
      })
      this.router.navigate(['/detail']);
  }



  sortBy: string = 'default'; // default là trạng thái không sắp xếp, có thể là 'asc' hoặc 'desc'

  // // Phương thức để thay đổi trạng thái sắp xếp
  // toggleSort() {
  //   this.sortBy = this.sortBy === 'asc' ? 'desc' : 'asc';
  //   this.sortData();
  // }

  // // Phương thức để sắp xếp dữ liệu
  sortData() {
    // Chuyển đổi BehaviorSubject thành mảng
    const dataArray = this.detailFunitureService.listDataCard.getValue();
  
    // Lựa chọn thuật toán sắp xếp ở đây, ví dụ sắp xếp mảng theo giá
    dataArray.sort((a, b) => {
      if (this.sortBy === 'asc') {
        return a.price - b.price;
      } 
      else {
        return b.price - a.price;
      }
    });
  
    // Cập nhật lại giá trị trong BehaviorSubject
    this.detailFunitureService.listDataCard.next(dataArray);
  }


  sortAscPrice() {
    this.sortBy = 'asc'; // Chỉ thực hiện sắp xếp tăng dần
    this.sortData();
  }
  sortDescPrice() {
    this.sortBy = 'desc'; // Chỉ thực hiện sắp xếp giam dần
    this.sortData();
  }


  sortAscName() {
    this.sortBy = 'asc'; // Chỉ thực hiện sắp xếp tăng dần
    this.sortData();
  }

  // Hàm sắp xếp tăng dần theo productName
  sortAscProductName() {
    const currentList = this.detailFunitureService.listDataCard.getValue();
    currentList.sort((a, b) => {
      const nameA = a.productName.toUpperCase();
      const nameB = b.productName.toUpperCase();
      return nameA.localeCompare(nameB);
    });
    this.detailFunitureService.listDataCard.next([...currentList]);
  }


    // Hàm sắp xếp giam dần theo productName
    sortDescProductName() {
      const currentList = this.detailFunitureService.listDataCard.getValue();
    currentList.sort((a, b) => {
      const nameA = a.productName.toUpperCase();
      const nameB = b.productName.toUpperCase();
      return nameB.localeCompare(nameA);
    });
    this.detailFunitureService.listDataCard.next([...currentList]);
    }
  








    currentPage = 1;
    itemsPerPage = 4; // Số lượng item trên mỗi trang
    totalPages = 1;
    listDataCard: any[] = []; // Dữ liệu gốc
    paginatedListDataCard: any[] = []; // Dữ liệu được phân trang
    pageNumbers: number[] = []; // Mảng số trang
  
  
    getData() {
      this.detailFunitureService.listDataCard.subscribe(data => {
        this.listDataCard = data;
        this.totalPages = Math.ceil(this.listDataCard.length / this.itemsPerPage);
        this.pageNumbers = Array.from({ length: this.totalPages }, (_, index) => index + 1);
        this.changePage(this.currentPage);
      });
    }
  
    changePage(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        const startIndex = (page - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        this.paginatedListDataCard = this.listDataCard.slice(startIndex, endIndex);
        this.currentPage = page;
      }
    }
}
