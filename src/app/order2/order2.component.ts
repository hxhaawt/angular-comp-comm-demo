import { Component, OnInit, Input } from '@angular/core';
import {PriceQuote} from "../price-quote/price-quote.component";

@Component({
  selector: 'app-order2',
  templateUrl: './order2.component.html',
  styleUrls: ['./order2.component.css']
})
export class Order2Component implements OnInit {

    // 变量是外部父组件给赋值的
    @Input()
    priceQuote: PriceQuote;


    constructor() { }

    ngOnInit() {

    }

}
