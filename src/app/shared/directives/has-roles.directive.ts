import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';
// import { ERoles, IAccount } from '../../interfaces/account.interface';

@Directive({
    selector: '[hasRoles]'
})
export class HasRolesDirective implements OnChanges {
    private visible!: boolean;
    private roles!: any[];
    private account: any;

    @Input() set hasRoles(roles: any[]) {
        this.roles = roles;
    }

    @Input('hasRolesFor') set hasRolesFor(account: any) {
        this.account = account;
    };

    constructor(private templateRef: TemplateRef<unknown>, private viewContainer: ViewContainerRef) {}

    ngOnChanges(): void {
        if (!this.roles?.length || !this.account) {
            return;
        }

        if (this.visible) {
            return;
        }

        // check if account roles include at least one of the input roles
        if (this.account.roles.some((role:any) => this.roles.includes(role))) {
            this.viewContainer.clear();
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.visible = true;

            return;
        }

        this.viewContainer.clear();
        this.visible = false;
    }

}