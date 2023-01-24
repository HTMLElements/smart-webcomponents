
import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { CrisisService } from './crisis.service';
import { Crisis } from './crisis';

@Injectable({
    providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
    constructor(private cs: CrisisService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> | Observable<never> {
        let id = route.paramMap.get('id');

        return this.cs.getCrisis(id).pipe(
            take(1),
            mergeMap(crisis => {
                if (crisis) {
                    return of(crisis);
                } else { // id not found
                    this.router.navigate([{ outlets: { crisis: ['crisis'] } }]);
                    return EMPTY;
                }
            })
        );
    }
}