import {Component} from "@angular/core";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {NavController} from "ionic-angular";
//import {DoseMedication} from "../../dose-medication/dose-medication";


@Component(
    {
        templateUrl: "build/pages/med-list/med-list.html",
        directives: [DoseAmigosToolbar]
    }
)

export class MedListPage {

    public title: string = "My Medications";
    public medList: Array<DoseMedication> = [];

    constructor(
        private medListService: MedListService
    ) {

    }

    /**
     * Initialize the page.
     * @returns {Promise}
     */
    ngOnInit(): any {

        this.userStatusClickPage = FeedPage;

        return this.doseAmigosUserService.list().then(
            medList => {
                this.medList = medList;
            }
        );
    }

}
