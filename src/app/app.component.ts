import { Component } from '@angular/core';
import {PriceQuote} from "./price-quote/price-quote.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    stock: string = '';

    priceQuote: PriceQuote = new PriceQuote('', 0);

    priceQuote2: PriceQuote = new PriceQuote('', 0);

    // 处理子组件传递过来的事件
    // 函数的参数和 this.lastPrice.emit(priceQuote); 中传递过来的一样，而且值就是传递过来的这个值
    priceQuoteHandler(event: PriceQuote) {
        this.priceQuote = event;
    }

    buyHandler(event: PriceQuote) {
        this.priceQuote2 = event;
    }

}


































