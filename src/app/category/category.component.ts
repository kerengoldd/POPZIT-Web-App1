import {Component, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {CategoryService} from "./category.service";
import {Subgenre} from "./subgenre.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

    bodyClass = 'categoryBackground';
    categories:Subgenre[] = [];
    selectedIndex:boolean[] = [];

    isValid:boolean = false;

    constructor(private categoryService:CategoryService,
                private router:Router) { }

    ngOnInit() {
        $('body').addClass(this.bodyClass);

        this.categoryService.getSubgenres()
            .subscribe( (categories:Subgenre[]) => this.categories = categories);

    }

    ngOnDestroy() {
        $('body').removeClass(this.bodyClass);
    }

    clickCategory(index:number) {
        this.selectedIndex[index] = !this.selectedIndex[index];
        for(let i of this.selectedIndex) {
            if(i === true) {
                this.isValid = true;
                return;
            }
        }
        this.isValid = false;
    }

    onSubmit() {
        for(let index in this.categories) {
            if(this.selectedIndex[index])
                this.categoryService.selectedSubgenres.push(this.categories[index]);
        }
        console.log(this.categoryService.selectedSubgenres);
        this.router.navigate(['/dashboard']);
    }
}
