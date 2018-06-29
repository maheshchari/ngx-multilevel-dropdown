import { Component, OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from '../../lib';
import { BookService } from './book.service';

@Component({
    selector: 'ngx-book',
    templateUrl: './book.component.html',
    providers: [
        BookService
    ]
})
export class BookComponent implements OnInit {
    dropdownEnabled = true;
    items: TreeviewItem[];
    values: number[];
    config = TreeviewConfig.create({
        hasAllCheckBox: true,
        hasFilter: true,
        hasCollapseExpand: true,
        decoupleChildFromParent: true,
        maxHeight: 400
    });

    constructor(
        private service: BookService
    ) { }

    ngOnInit() {
        this.items = this.service.getBooks();
    }

    selectedOptions(event) {
        this.values = event;
    }

    onFilterChange(value: string) {
        console.log('filter:', value);
    }
}
