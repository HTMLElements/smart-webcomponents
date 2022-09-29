import { animate, query, style, transition, trigger } from "@angular/animations";

export const fadeWithOpacity =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter', [
        style({
          visibility: 'hidden'
        })
      ], {
        optional: true
      }),
      query(
        ':leave',
        animate('0.3s ease-out', style({
          opacity: 0,
          visibility: 'hidden'
        })), { optional: true }),
    ]),
  ]);