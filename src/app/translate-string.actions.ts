import { Action } from '@ngrx/store';

export const TRANSLATE_FRENCH: string = "Translate French";
export const TRANSLATE_SPANISH: string = "Translate Spanish";
export const TRANSLATE_ENGLISH: string = "Translate English";

// Export actions as classes that implement Action interface
export class TranslateFrench implements Action {
    readonly type = TRANSLATE_FRENCH;
}

export class TranslateSpanish implements Action {
    readonly type = TRANSLATE_SPANISH;
}

export class TranslateEnglish implements Action {
    readonly type = TRANSLATE_ENGLISH;
}
