import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Component({
    selector: 'use-user',
    templateUrl: './user.component.html',
    styles: []
})
export class UserComponent implements OnInit {
    // title: string = '!';
    hero$: Observable<User>;

    HEROES: User[] = [
        {id: 11, name: 'Mr. Nice'},
        {id: 12, name: 'Narco'},
        {id: 13, name: 'Bombasto'},
        {id: 14, name: 'Celeritas'},
        {id: 15, name: 'Magneta'},
        {id: 16, name: 'RubberMan'},
        {id: 17, name: 'Dynama'},
        {id: 18, name: 'Dr IQ'},
        {id: 19, name: 'Magma'},
        {id: 20, name: 'Tornado'}
    ];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.hero$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                const id = params.get('id');
                console.log('params : ', params, id);
                return this.getHero(id);
            })
        );
        console.log('paramMap : ', this.hero$);
    }

    getHeroes(): Observable<User[]> {
        // TODO: send the message _after_ fetching the heroes
        console.log('fetched heroes');
        return of(this.HEROES);
    }

    getHero(id: number | string) {
        return this.getHeroes().pipe(
            // (+) before `id` turns the string into a number
            map((users: User[]) => users.find(user => user.id === +id))
        );
    }
}

export class User {
    id: number;
    name: string;
}
