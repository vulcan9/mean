import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'use-page-empty',
    template: `
        <p>
            page-empty works!
        </p>
    `,
    styles: []
})
export class PageEmptyComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
