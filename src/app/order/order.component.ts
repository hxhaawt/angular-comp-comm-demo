import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

    // 这两个变量是外部父组件给赋值的
    @Input()
    stockCode: string;

    @Input()
    amount: number;

    constructor() {

        setInterval( () => {
            this.stockCode = 'ask';
        }, 3000);
    }

    ngOnInit() {
    }
}








