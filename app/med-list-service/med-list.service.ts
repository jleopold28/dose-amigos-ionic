import {Injectable} from "@angular/core";
import {MED_LIST} from "./med-list-mocks":
import {DoseMedication} from "../dose-medication";

/**
 * Service for listing current medications.
 */
@Injectable()
export class MedListService {

    /**
     * Get a list of DoseMedications.
     * @returns {Promise<Array<DoseMedication>>}
     */
    public list(): Promise<Array<DoseMedication>> {
        return Promise.resolve(
            MED_LIST
        );
    }

    /**
     * Get a single DoseMedication by ID.
     * @param id {number} of DoseMedication.
     * @returns {Promise<DoseMedication>}
     */
    public get(
        id: number
    ): Promise<DoseMedication> {
        return Promise.resolve(
            MED_LIST.filter(
                (doseMedication) => doseMedication.id === id
            )[0]
        );
    }

}
