import {it, describe, expect} from "@angular/core/testing";
import {MedListPage} from "./amigos";
import {DoseMedication} from "../../dose-medication/dose-medication";
import {MED_LIST} from "../../med-list-service/med-list-mocks";
import {MedListService} from "../../med-list-service/med-list.service";

class MockMedListService {

    list(): Promise<Array<DoseMedication>> {
        return Promise.resolve(
            MED_LIST
        );
    }

}

/**
 * Tests for Med List component.
 */
describe("MedListPage", () => {

    it("should get DoseMedication from the service", () => {

        const mockMedListService: MedListService = new medListService() as MedListService;

        const MedListPage: MedListPage = new MedListPage(
            medListService
        );

        return MedListPage.ngOnInit().then(
            () => {
                expect(
                    MedListPage.doseMedication
                ).toEqual(
                    MED_LIST,
                    "should get DoseMedication from the service"
                );
            }
        );

    });

    it("should have title set", () => {

        const medListService: MedListService = new medListService() as MedListService;

        const MedListPage: MedListPage = new MedListPage(
            medListService
        );

        return MedListPage.ngOnInit().then(
            () => {
                expect(
                    MedListPage.title
                ).toEqual(
                    "Amigos",
                    "should have title set"
                );
            }
        );

    });

});