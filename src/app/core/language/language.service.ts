import { Injectable } from '@angular/core';
import { Country } from 'src/app/models/country';
import { Language } from './language';
import { Arabic } from './translations/language-arabic';
import { English } from './translations/language-english';
import { Russian } from './translations/language-russian';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  //
  // ─── VARIABLES ──────────────────────────────────────────────────────────────────
  //
  public english = new English();
  public arabic = new Arabic();
  public russian = new Russian();

  private selectedLanguageSource: Subject<Language> = new Subject();
  public selectedLanguage$: Observable<
    Language
  > = this.selectedLanguageSource.asObservable();

  public readonly enabledLanguages: Array<Language> = [
    this.english,
    this.arabic,
    this.russian,
  ];

  // This default value's reference is not contained in enabledLanguages.
  private _selectedLanguage: Language = undefined;
  get selectedLanguage() {
    return this._selectedLanguage || this.english;
  }
  set selectedLanguage(language: Language) {
    this._selectedLanguage = language;
    this.selectedLanguageSource.next(language);
    this.setMargins();
  }
  //
  // ─── HELPER FUNCTIONS ───────────────────────────────────────────────────────────
  //
  public clearLanguage(): Language {
    this.selectedLanguage = undefined;
    return this.selectedLanguage;
  }

  //
  // ─── TYPE CONVERSION ────────────────────────────────────────────────────────────
  //
  // TODO: do not use language as string anymore
  public stringToLanguage(language: string): Language {
    switch (language) {
      case 'ar':
        return this.arabic;
      case 'en':
        return this.english;
      case 'ru':
        return this.russian;
      case 'fr':
        return null;
      default:
        return this.english;
    }
  }

  public languageToString(language: Language): string {
    switch (language) {
      case this.arabic:
        return 'ar';
      case this.english:
        return 'en';
      case this.russian:
        return 'ru';
      case null:
        return 'fr';
      default:
        return 'en';
    }
  }
  //
  // ─── MISC ───────────────────────────────────────────────────────────────────────
  //
  public countryToDefaultLanguage(country: Country): Language {
    switch (country.get<string>('id')) {
      case 'SYR':
        return this.arabic;
      case 'UKR':
        return this.russian;
      case 'KHM':
      default:
        return this.english;
    }
  }

  public setMargins() {
    const element = document.getElementsByTagName(
      'mat-sidenav-content'
    ) as HTMLCollectionOf<HTMLElement>;
    if (this.selectedLanguage === this.arabic) {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
      element[0].style.margin = '0px 64px 0px 0px';
    } else {
      document.getElementsByTagName('html')[0].setAttribute('dir', '');
      element[0].style.margin = '0px 0px 0px 64px';
    }
  }
}
