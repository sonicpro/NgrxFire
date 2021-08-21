import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
// import { translateEnglish, translateFrench, translateSpanish } from '../actions';
import{ AppState } from '../models/app-state';
import * as TranslateStringActions from '../translate-string.actions';

@Component({
    selector: 'app-translate',
    templateUrl: './translate.component.html'
})
export class TranslateComponent {
    greetings$: Observable<string>;

    /**
     *
     */
    constructor(private store: Store<AppState>) {
        this.greetings$ = this.store.select('greetings')
    }

    onTranslateFrench() {
        // this.store.dispatch(translateFrench());
        this.store.dispatch(new TranslateStringActions.TranslateFrench());
    }

    onTranslateSpanish() {
        // this.store.dispatch(translateSpanish());
        this.store.dispatch(new TranslateStringActions.TranslateSpanish());
    }
}


