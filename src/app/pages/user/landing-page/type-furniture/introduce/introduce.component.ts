import { Component } from '@angular/core';
import {PrivacyPolicyModule} from "../privacy-policy/privacy-policy-module";
import {DestroyService} from "../../../../../common/service/destroy.service";
import {IntroduceModule} from "./introduce-module";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss'],
  standalone: true,
  imports: [IntroduceModule, ReactiveFormsModule],
  providers: [DestroyService]
})
export class IntroduceComponent {

}
