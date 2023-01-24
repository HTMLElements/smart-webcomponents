import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Hero } from './hero';

@Injectable()
export class HeroesService {
  heroesUrl = 'api/heroes';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  /** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Hero[]>(this.heroesUrl, options)
      .pipe(
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the database */
  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero)
      .pipe(
        catchError(this.handleError('addHero', hero))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteHero (id: number): Observable<{}> {
    const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError('deleteHero'))
      );
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  updateHero (hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(this.heroesUrl, hero)
      .pipe(
        catchError(this.handleError('updateHero', hero))
      );
  }
}
