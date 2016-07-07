import {Page} from "./page";
import {FeedPage} from "./feed/feed";
import {AmigosPage} from "./amigos/amigos";
import {DosePage} from "./dose/dose";
import {AmigoRequestsPage} from "./amigo-requests/amigo-requests";
import {MedListPage} from "./med-list/med-list";

export var PAGE_LIST: Array<Page> = [
    {
        title: "News Feed",
        component: FeedPage,
        icon: "list-box"
    },
    {
        title: "Dose",
        component: DosePage,
        icon: "medkit"
    },
    {
        title: "Amigos",
        component: AmigosPage,
        icon: "people"
    },
    {
        title: "Amigo Requests",
        component: AmigoRequestsPage,
        icon: "person-add"
    },
    {
        title: "My Medications",
        component: MedListPage,
        icon: "medkit"
    }
];
