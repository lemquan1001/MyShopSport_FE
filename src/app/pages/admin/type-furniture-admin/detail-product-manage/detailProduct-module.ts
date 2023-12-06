import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NzTableModule } from "ng-zorro-antd/table";
import { ResizeColumnDirective } from "src/app/common/directives/resize-column.directive";

export const DetailProductManageModule = [
    CommonModule,
    NzTableModule,
    ResizeColumnDirective,
    HttpClientModule,
    FormsModule,

  ];