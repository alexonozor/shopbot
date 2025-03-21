import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-stores',
    templateUrl: './stores.component.html',
    imports: [
        RouterModule
    ]
})
export class StoresComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
