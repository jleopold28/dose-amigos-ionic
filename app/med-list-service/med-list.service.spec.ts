import {it, describe, expect, inject, beforeEachProviders} from "@angular/core/testing";
import {MedListService} from "./med-list.service";
import {MED_LIST} from "./med-list-mocks";

/**
 * Tests for MedListService
 */
describe("MedListService", () => {

    beforeEachProviders(() => [DoseAmigosUserService]);

    describe("list", () => {

        it("should return a promise of a DoseMedication array", inject([DoseAmigosUserService], (doseAmigosUserService: DoseAmigosUserService) => {

            expect(
                doseAmigosUserService.list()
            ).toEqual(
                Promise.resolve(
                    MED_LIST
                ),
                "should return a promise of a DoseMedication array"
            );

        }));

    });

    describe("get", () => {

        it("should return a promise of a DoseMedication", inject([DoseAmigosUserService], (doseAmigosUserService: DoseAmigosUserService) => {

            expect(
                doseAmigosUserService.get(200)
            ).toEqual(
                Promise.resolve(
                    MED_LIST[1]
                ),
                "should return a promise of a DoseMedication"
            );

        }));

    });

});
