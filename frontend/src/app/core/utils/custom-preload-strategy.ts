import { PreloadingStrategy, Route } from '@angular/router';
import { mergeMap, Observable, of, timer } from 'rxjs';

export class CustomPreloadStrategy implements PreloadingStrategy {
  /**
   * Custom Preloading Strategy for Angular routes.
   *
   * @name preload
   * @param {route} Angular route.
   * @param {loadFunction} loadFunction to be returned if Angular route is preload is true
   *
   * @return {Observable<unknown> | of(null)} Either returns loadFunction's return or of(null).
   */
  preload(
    route: Route,
    loadFunction: () => Observable<unknown>
  ): Observable<unknown> {
    const loadRoute = (delayInMilliseconds: number): Observable<unknown> =>
      delayInMilliseconds
        ? timer(delayInMilliseconds).pipe(mergeMap((_) => loadFunction()))
        : loadFunction();

    return route.data && route.data['preload']
      ? loadRoute(route.data['delayInMilliseconds'])
      : of(null);
  }
}
