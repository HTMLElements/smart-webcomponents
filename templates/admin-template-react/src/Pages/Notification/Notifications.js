import './Notifications.scss';
import { useEffect, useRef } from 'react';

import withAnimation from '../../hoc/withAnimation';

import { Toast, Button, CheckBox, RadioButton, Input } from '../../smartImports';

import { defaultTitle } from '../../contexts/themeContext';

function Notifications() {

    const toastRef = useRef(null);

    useEffect(() => { document.title = `Notifications - ${defaultTitle}` }, []);

    return (
        <>
            <div className="container notifications-page">
                <div className="row">
                    <div className="col-12 mb-3"><h4>Notifications</h4></div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <p>Smart.Toast represents an element which displays an unobtrusive notification to the user.</p>
                        <br />
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="d-flex flex-column">
                                    <label>Message</label>
                                    <Input
                                        onChange={(e) => toastRef.current.value = e.target.value}
                                        id="messageInput"
                                        placeholder="Enter a message"
                                        value="Sample notification"
                                    ></Input>
                                    <label>Type</label>
                                    <Input
                                        onChange={(e) => toastRef.current.type = e.detail.value}
                                        id="typeInput"
                                        dropDownHeight="400"
                                        dataSource={["info", "warning", "success", "error", "mail", "time"]}
                                        dropDownButtonPosition="right"
                                        readonly
                                        value="warning"
                                    ></Input>
                                    <CheckBox
                                        id="enableAutoClose"
                                        checked
                                        onChange={(e) => toastRef.current.autoClose = e.detail.value}
                                    >Auto close</CheckBox>
                                    <CheckBox
                                        id="enableBlink"
                                        checked
                                        onChange={(e) => toastRef.current.classList.toggle('blink', e.detail.value)}
                                    >Blink</CheckBox>
                                    <CheckBox
                                        id="enableCloseButton"
                                        checked
                                        onChange={(e) => toastRef.current.showCloseButton = e.detail.value}
                                    >Close button</CheckBox>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="d-flex flex-column">
                                    <label>Position</label>
                                    <RadioButton
                                        id="topLeft"
                                        onChange={(e) => toastRef.current.position = 'top-left'}
                                    >Top-left</RadioButton>
                                    <RadioButton
                                        id="topRight"
                                        onChange={(e) => toastRef.current.position = 'top-right'}
                                    >Top-right</RadioButton>
                                    <RadioButton
                                        id="bottomLeft"
                                        onChange={(e) => toastRef.current.position = 'bottom-left'}
                                    >Bottom-left</RadioButton>
                                    <RadioButton
                                        id="bottomRight"
                                        onChange={(e) => toastRef.current.position = 'bottom-right'}
                                        checked
                                    >Bottom-right</RadioButton>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <Button
                                onClick={() => toastRef.current.open()}
                                id="show"
                                className="small-button primary"
                            >Show notification</Button>&nbsp;<Button
                                onClick={() => toastRef.current.closeAll()}
                                id="clearAll"
                                className="small-button primary outlined"
                            >Clear all</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Toast
                ref={toastRef}
                id="toast"
                className="blink"
                autoClose
                position="bottom-right"
                showCloseButton
                type="warning"
            >Sample notification</Toast>
        </>
    )
}

export default withAnimation(Notifications)