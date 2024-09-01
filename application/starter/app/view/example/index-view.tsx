import {RapidComponent, RapidComponentState, RapidProps} from "react-rapid-app";


interface Props extends RapidProps {
}

class State extends RapidComponentState {
}

export default class IndexView extends RapidComponent<Props, State> {

    renderUI() {
        const _this = this;
        return (
            <div>
                <div className={"text-center"}>
                    <h1>Home Page</h1>
                </div>
            </div>
        )
    }
}