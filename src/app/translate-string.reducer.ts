import { createReducer, on, Action } from '@ngrx/store';
import { translateEnglish, translateFrench, translateSpanish } from './actions';

const initialState = 'Hello World!';

const tralslateStringReducer = createReducer(initialState,
    on(translateEnglish, store => 'Hello World!'),
    on(translateFrench, store => 'Bonjour le Monde!'),
    on(translateSpanish, store => 'Hola Mundo!')
    )

export const translateReducer = (state: string | undefined, action: Action) =>
    tralslateStringReducer(state, action);