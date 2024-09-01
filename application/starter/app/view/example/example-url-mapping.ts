import {RapidAppConfig, RapidLayoutInfoData, RapidURLMapping, React} from "react-rapid-app";


const IndexView = React.lazy(() => import('./index-view'));
const ContactView = React.lazy(() => import('./contact-view'));
const AboutView = React.lazy(() => import('./about-view'));

const UI_BASE_URL = "/"

export default class ExampleUrlMapping {


    public static readonly API = {};


    public static readonly ui = {
        index: UI_BASE_URL,
        about: UI_BASE_URL + "about",
        contact: UI_BASE_URL + "contact",
    };

    private static privateUrlMappings(privateLayoutInfo: RapidLayoutInfoData): RapidLayoutInfoData {
        return privateLayoutInfo;
    }

    private static publicUrlMappings(publicLayoutInfo: RapidLayoutInfoData): RapidLayoutInfoData {
        publicLayoutInfo.addPageInstance(this.ui.index, IndexView);
        publicLayoutInfo.addPageInstance(this.ui.about, AboutView);
        publicLayoutInfo.addPageInstance(this.ui.contact, ContactView);
        return publicLayoutInfo;
    }

    public static register(urlMapping: RapidURLMapping, appConfig: RapidAppConfig): void {
        this.privateUrlMappings(urlMapping.privateLayout)
        this.publicUrlMappings(urlMapping.publicLayout)
    }
}