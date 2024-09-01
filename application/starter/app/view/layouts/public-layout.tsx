import {RapidLayoutRenderer, RapidReactComponent, React} from 'react-rapid-app';
import Bootstrap from "react-rapid-bootstrap/boot/react/Bootstrap";


interface Props {
    route?: any;
    appConfig?: any;
    component?: any;
    additionalData?: any;
}

export default class PublicLayout extends RapidReactComponent<Props, any> {

    render() {
        const {component, route, appConfig, additionalData} = this.props;
        return (
            <>
                <Bootstrap>
                    <nav className="navbar navbar-expand-lg px-lg-5 navbar-dark bg-dark">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                                Bangla Fighter
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#responsive-navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="responsive-navigation">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#!">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">Contact</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </nav>
                    <main className="container">
                        <RapidLayoutRenderer
                            route={route}
                            appConfig={appConfig}
                            component={component}
                            additionalData={additionalData}/>
                    </main>
                    <footer className="footer mt-auto py-3 bg-dark">
                        <div className="container">
                            <p className="m-0 text-center text-white">
                                Copyright &copy; Your Website 2024
                            </p>
                        </div>
                    </footer>
                </Bootstrap>
            </>
        );
    }
}