import './Modals.scss';
import { useEffect, useRef } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { defaultTitle } from '../../../contexts/themeContext';

import { Button, Window, AlertWindow, DialogWindow } from '../../../smartImports';

function GridLayout() {

    const primaryWindowRef = useRef(null);
    const successWindowRef = useRef(null);
    const errorWindowRef = useRef(null);
    const primaryColoredWindowRef = useRef(null);
    const successColoredWindowRef = useRef(null);
    const errorColoredWindowRef = useRef(null);
    const smallWindowRef = useRef(null);
    const mediumWindowRef = useRef(null);
    const largeWindowRef = useRef(null);
    const alertWindowRef = useRef(null);
    const dialogWindowRef = useRef(null);
    const multilineWindowRef = useRef(null);

    useEffect(() => { document.title = `Modals - ${defaultTitle}` }, []);

    const handleWindowOpenButtonClick = (windowRef) => windowRef.current.open();
    const handleInWindowButtonClick = (windowRef) => windowRef.current.close();
    const handleSpecialWindowClick = (windowRef, e) =>
        e.target.closest('.smart-close') ||
            e.target.closest('.smart-confirm-button') ||
            e.target.closest('.smart-cancel-button')
            ? windowRef.current.close()
            : {}

    return (
        <div className="container modals-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Modals</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Default modal (Window)</h4>
                        </div>
                        <div className="card-body">
                            <Button
                                onClick={handleWindowOpenButtonClick.bind(null, primaryWindowRef)}
                                id="openPrimaryModal"
                                className="small-button primary mb-3 mr-3"
                            >Open primary modal</Button>&nbsp;<Button
                                onClick={handleWindowOpenButtonClick.bind(null, successWindowRef)}
                                id="openSuccessModal"
                                className="small-button success mb-3 mr-3"
                            >Open success modal</Button>&nbsp;<Button
                                onClick={handleWindowOpenButtonClick.bind(null, errorWindowRef)}
                                id="openErrorModal"
                                className="small-button error mb-3"
                            >Open error modal</Button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Colored modal</h4>
                        </div>
                        <div className="card-body">
                            <Button
                                onClick={handleWindowOpenButtonClick.bind(null, primaryColoredWindowRef)}
                                id="openPrimaryCModal"
                                className="small-button primary mb-3 mr-3"
                            >Open primary colored modal</Button>&nbsp;<Button
                                onClick={handleWindowOpenButtonClick.bind(null, successColoredWindowRef)}
                                id="openSuccessCModal"
                                className="small-button success mb-3 mr-3"
                            >Open success colored modal</Button>&nbsp;<Button
                                onClick={handleWindowOpenButtonClick.bind(null, errorColoredWindowRef)}
                                id="openErrorCModal"
                                className="small-button error mb-3"
                            >Open error colored modal</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Modal sizes</h4>
                        </div>
                        <div className="card-body">
                            <Button
                                onClick={handleWindowOpenButtonClick.bind(null, smallWindowRef)}
                                id="openSmallModal"
                                className="small-button primary mb-3 mr-3"
                            >Open small modal</Button>&nbsp;<Button
                                onClick={handleWindowOpenButtonClick.bind(null, mediumWindowRef)}
                                id="openMediumModal"
                                className="small-button primary mb-3 mr-3"
                            >Open medium modal</Button>&nbsp;<Button
                                onClick={handleWindowOpenButtonClick.bind(null, largeWindowRef)}
                                id="openLargeModal"
                                className="small-button primary mb-3"
                            >Open large modal</Button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Modal types</h4>
                        </div>
                        <div className="card-body">
                            <Button
                                onClick={handleWindowOpenButtonClick.bind(null, alertWindowRef)}
                                id="openAlertModal"
                                className="small-button secondary mb-3 mr-3"
                            >Open alert modal</Button>&nbsp;<Button
                                onClick={handleWindowOpenButtonClick.bind(null, dialogWindowRef)}
                                id="openDialogModal"
                                className="small-button secondary mb-3 mr-3"
                            >Open dialog modal</Button>&nbsp;<Button
                                onClick={handleWindowOpenButtonClick.bind(null, multilineWindowRef)}
                                id="openMultilineModal"
                                className="small-button secondary mb-3"
                            >Open multiline modal</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Window ref={primaryWindowRef} id="primary" label="Primary modal" modal>
                This is a modal with the primary color.
                <Button onClick={handleInWindowButtonClick.bind(null, primaryWindowRef)} className="primary outlined smart-close mt-5">Close</Button>
            </Window>

            <Window ref={successWindowRef} id="success" label="Success modal" modal>
                This is a modal with the success color.
                <Button onClick={handleInWindowButtonClick.bind(null, successWindowRef)} className="success outlined smart-close mt-5">Close</Button>
            </Window>

            <Window ref={errorWindowRef} id="error" label="Error modal" modal>
                This is a modal with the error color.
                <Button onClick={handleInWindowButtonClick.bind(null, errorWindowRef)} className="error outlined smart-close mt-5">Close</Button>
            </Window>

            <Window ref={primaryColoredWindowRef} id="primaryc" label="Primary-colored modal" modal>
                This is a modal with the primary color.
                <Button onClick={handleInWindowButtonClick.bind(null, primaryColoredWindowRef)} className="smart-close mt-5">Close</Button>
            </Window>

            <Window ref={successColoredWindowRef} id="successc" label="Success-colored modal" modal>
                This is a modal with the success color.
                <Button onClick={handleInWindowButtonClick.bind(null, successColoredWindowRef)} className="smart-close mt-5">Close</Button>
            </Window>

            <Window ref={errorColoredWindowRef} id="errorc" label="Error-colored modal" modal>
                This is a modal with the error color.
                <Button onClick={handleInWindowButtonClick.bind(null, errorColoredWindowRef)} className="smart-close mt-5">Close</Button>
            </Window>

            <Window ref={smallWindowRef} id="small" label="Small modal" modal>
                This is a small modal.
                <Button onClick={handleInWindowButtonClick.bind(null, smallWindowRef)} className="primary smart-close mt-5">Close</Button>
            </Window>

            <Window ref={mediumWindowRef} id="medium" label="Medium modal" modal>
                This is a medium modal.
                <Button onClick={handleInWindowButtonClick.bind(null, mediumWindowRef)} className="primary smart-close mt-5">Close</Button>
            </Window>

            <Window ref={largeWindowRef} id="large" label="Large modal" modal>
                This is a large modal.
                <Button onClick={handleInWindowButtonClick.bind(null, largeWindowRef)} className="primary smart-close mt-5">Close</Button>
            </Window>

            <AlertWindow onClick={handleSpecialWindowClick.bind(null, alertWindowRef)} ref={alertWindowRef} tabCloseButtons id="alert" label="Alert modal" modal>
                This is an alert modal!
            </AlertWindow>

            <DialogWindow onClick={handleSpecialWindowClick.bind(null, dialogWindowRef)} ref={dialogWindowRef} id="dialog" label="Dialog modal" modal>
                Proin venenatis dignissim tortor vel mattis. Mauris vel justo consectetur quam iaculis volutpat ac a libero. Ut in
                facilisis orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Vivamus a ex turpis. In dignissim consectetur metus, iaculis volutpat urna scelerisque id. Aliquam vel dictum orci,
                nec tempor metus?
            </DialogWindow>

            <smart-multiline-prompt-window
                onClick={handleSpecialWindowClick.bind(null, multilineWindowRef)}
                ref={multilineWindowRef}
                id="multiline"
                label="Multiline modal"
                modal
                prompt-label="Enter your address:"
            ></smart-multiline-prompt-window>
        </div>
    )
}

export default withAnimation(GridLayout)