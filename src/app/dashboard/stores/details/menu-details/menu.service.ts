import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Menu } from 'src/app/shared/models/menu';

@Injectable()
export class MenuService implements Resolve<any> {
    routeParams: any;
    menu: any;
    onMenuChanged: BehaviorSubject<any>;
    private hostServer: string = environment.hostServer;


    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    ) {
        // Set the defaults
        this.onMenuChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getMenu()
            ]).then(
                () => {
                    resolve(null);
                },
                reject
            );
        });
    }

    /**
     * Get menu
     *
     * @returns {Promise<any>}
     */
    getMenu(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get(`${this.hostServer}/menus/` + this.routeParams.menuId)
                .subscribe((response: any) => {
                    console.log(response)
                    this.menu = response;
                    this.onMenuChanged.next(this.menu);
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Save menu
     *
     * @param menu
     * @returns {Promise<any>}
     */
    saveMenu(menu: Menu): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/e-commerce-menus/' + menu._id, menu)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    updateMenu(params: Menu): Observable<any> {
        return this._httpClient.put(`${this.hostServer}/menus/${this.menu._id}`, params)
    }

    addFoodToMenu(foodId: string, menuId: string): Observable<any> {
        return this._httpClient.post(`${this.hostServer}/menus/add/food`, { foodId, menuId })
    }

    removeFoodToMenu(foodId: string, menuId: string): Observable<any> {
        return this._httpClient.delete(`${this.hostServer}/menus/remove/food`, {body: { foodId, menuId }})
    }

    updateStatus(params: any): Observable<any> {
        return this._httpClient.put(`${this.hostServer}/menus/${this.menu._id}/status/${this.menu.user._id}`, params)
    }

    /**
     * Add menu
     *
     * @param menu
     * @returns {Observable<any>}
     */
    addMenu(menu: Menu): Observable<any> {
        return this._httpClient.post(`${this.hostServer}/menus`, menu)
    }
}
