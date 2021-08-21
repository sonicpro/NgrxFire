import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { translateEnglish, translateFrench, translateSpanish } from '../actions';

@Component({
    selector: 'app-translate',
    templateUrl: './translate.component.html'
})
export class TranslateComponent {
    greetings$: Observable<string>;

    /**
     *
     */
    constructor(private store: Store<{ greetings: string }>) {
        this.greetings$ = this.store.select('greetings')
    }

    onTranslateFrench() {
        this.store.dispatch(translateFrench());
    }

    onTranslateSpanish() {
        this.store.dispatch(translateSpanish());
    }
}


