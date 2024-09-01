import {RapidComponent, RapidComponentState, RapidProps} from "react-rapid-app";


interface Props extends RapidProps {
}

class State extends RapidComponentState {
}

export default class ContactView extends RapidComponent<Props, State> {

    renderUI() {
        const _this = this;
        return (
            <div>
                <div className={"text-center"}>
                    <h1>Contact Page</h1>
                </div>
            </div>
        )
    }
}