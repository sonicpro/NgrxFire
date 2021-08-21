import { /*createReducer, on,*/ Action, ActionReducer } from '@ngrx/store';
// import { translateEnglish, translateFrench, translateSpanish } from './actions';
import * as TranslateStringActions from './translate-string.actions';

// const initialState = 'Hello World!';

// const tralslateStringReducer = createReducer(initialState,
//     on(translateEnglish, store => 'Hello World!'),
//     on(translateFrench, store => 'Bonjour le Monde!'),
//     on(translateSpanish, store => 'Hola Mundo!')
//     )

// export const translateReducer: ActionReducer<string, Action> = (state: string | undefined, action: Action) =>
//     tralslateStringReducer(state, action);

export const translateReducer: ActionReducer<string, Action> = (state: string | undefined = 'Hello World', action: Action) => {
    console.log(action.type, state);

    switch (action.type) {
        case TranslateStringActions.TRANSLATE_SPANISH:
            return state = 'Hole Mundo!';

        case TranslateStringActions.TRANSLATE_FRENCH:
            return state = 'Bonjour le monde';

        default:
            return state;
    }
}