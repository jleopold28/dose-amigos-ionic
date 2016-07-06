import {DoseMedication} from "../dose-medication/dose-medication;

const now: Date = new Date();
const fifteenMinAgo: Date = new Date(now.getTime() - 15 * 60000);
const fortyFiveMinAgo: Date = new Date(now.getTime() - 45 * 60000);
const fifteenMinFromNow: Date = new Date(now.getTime() + 15 * 60000);

export var MED_LIST: Array<DoseMedication> = [
    {
        id: 300,
        name: "Barney Rubble",
        lastTimeDoseTaken: now,
        nextTimeDoseScheduled: fifteenMinFromNow
    },
    {
        id: 200,
        name: "Wilma Flintstone",
        lastTimeDoseTaken: fifteenMinAgo,
        nextTimeDoseScheduled: now
    },
    {
        id: 100,
        name: "Betty Rubble",
        lastTimeDoseTaken: fortyFiveMinAgo,
        nextTimeDoseScheduled: fifteenMinAgo
    }
];
