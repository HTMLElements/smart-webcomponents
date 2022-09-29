import './AccountSettings.scss';
import { useEffect } from 'react';

import { AnimatePresence } from 'framer-motion';

import withAnimation from '../../../hoc/withAnimation';

import { ListBox, ListItem, Button, Input, MultilineTextBox } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';
import { useState } from 'react';

const AccountSection = withAnimation(({ openTodayMenu }) => (
    <>
        <div className="card mb-5">
            <div className="card-header">
                <h4 className="label">Public info</h4>
                <div
                    className="settings-button"
                    onClick={(e) => openTodayMenu(e)}
                    onPointerUp={(e) => e.stopPropagation()}
                >…</div>
            </div>

            <div className="card-body">
                <div id="publicInfoContainer" className="row d-flex">
                    <div className="col-md-8 order-2 order-md-1">
                        <div className="mb-3">
                            <label id="userNameLabel">Username</label>
                            <Input id="userNameInput" className="w-100" placeholder="Username"></Input>
                        </div>

                        <div className="mb-4">
                            <label id="biographyLabel">Biography</label>
                            <MultilineTextBox id="biographyInput" className="w-100" placeholder="Share something here..."></MultilineTextBox>
                        </div>

                        <Button className="primary">Save changes</Button>
                    </div>

                    <div className="col-md-4 order-1 order-md-2 text-center">
                        <div className="avatar-holder mb-3">
                            <div className="img-as-background w-80px square rounded-circle mx-auto">
                                <img src="assets/images/phonebook/mark.png" alt='' />
                            </div>
                        </div>

                        <div className="mb-3">
                            <Button id="uploadButton" className="small-button primary"><span className="material-icons">cloud_upload</span> Upload</Button>
                        </div>

                        <small>Choose an image no <br />larger than 3MB</small>
                    </div>
                </div>
            </div>
        </div>

        <div className="card mb-5">
            <div className="card-header">
                <h4 className="label">Private info</h4>
                <div
                    className="settings-button"
                    onClick={(e) => openTodayMenu(e)}
                    onPointerUp={(e) => e.stopPropagation()}
                >…</div>
            </div>

            <div className="card-body">
                <div id="privateInfoContainer">
                    <div className="row mb-3">
                        <div className="mb-3 col-sm-6">
                            <label id="firstNameLabel">First name</label>
                            <Input id="firstNameInput" className="w-100" placeholder="First name"></Input>
                        </div>
                        <div className="mb-3 col-sm-6">
                            <label id="lastNameLabel">Last name</label>
                            <Input id="lastNameInput" className="w-100" placeholder="Last name"></Input>
                        </div>
                        <div className="mb-3 col-sm-12">
                            <label id="emailLabel">Email</label>
                            <Input id="emailInput" className="w-100" placeholder="Email"></Input>
                        </div>
                        <div className="mb-3 col-sm-12">
                            <label id="addressLabel">Address</label>
                            <Input id="addressInput" className="w-100" placeholder="9581 Lovers Ln"></Input>
                        </div>
                        <div className="mb-3 col-sm-12">
                            <label id="address2Label">Address 2</label>
                            <Input id="address2Input" className="w-100" placeholder="7118 Spring St"></Input>
                        </div>
                        <div className="mb-3 col-sm-4">
                            <label id="cityLabel">City</label>
                            <Input id="cityInput" className="w-100"></Input>
                        </div>
                        <div className="mb-3 col-sm-4">
                            <label id="stateLabel">State</label>
                            <Input id="stateInput" className="w-100" placeholder="Select a state..." drop-down-button-position="right" data-source='["Andhra Pradesh", "Manipur", "Tamil Nadu"]'></Input>
                        </div>
                        <div className="mb-3 col-sm-4">
                            <label id="zipLabel">ZIP</label>
                            <Input id="zipInput" className="w-100"></Input>
                        </div>
                    </div>

                    <Button className="primary">Save changes</Button>
                </div>
            </div>
        </div>
    </>
))

const PasswordSection = withAnimation(() => (
    <>
        <div className="card mb-5">
            <div className="card-header">
                <h4 className="label">Password</h4>
            </div>
            <div className="card-body">
                <div id="passwordInfoContainer">
                    <div className="mb-3">
                        <label>Current password</label>
                        <Input className="w-100"></Input>
                        <a href="#" className="styled forgot">Forgot your password?</a>
                    </div>

                    <div className="mb-3">
                        <label>New password</label>
                        <Input className="w-100"></Input>
                    </div>

                    <div className="mb-5">
                        <label>Verify password</label>
                        <Input className="w-100"></Input>
                    </div>

                    <Button className="primary">Save changes</Button>
                </div>
            </div>
        </div>
    </>
))

function AccountSettings({ openTodayMenu }) {

    const [selectedListItem, setSelectedListItem] = useState(0);

    useEffect(() => { document.title = `Settings - ${defaultTitle}` }, []);

    const handleListboxChange = (e) => {

        setSelectedListItem(e.detail.index);

    }

    return (
        <div className="container account-settings">
            <div className="row">
                <div className="col-12 mb-3"><h4>Settings</h4></div>
            </div>

            <div className="row account-settings">
                <div className="col-lg-4 mb-5">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="label">Profile Settings</h4>
                        </div>

                        <div className="card-body">
                            <ListBox onChange={handleListboxChange} id="settingsListBox">
                                <ListItem selected>Account</ListItem>
                                <ListItem>Password</ListItem>
                                <ListItem>Privacy and safety</ListItem>
                                <ListItem>Email notifications</ListItem>
                                <ListItem>Web notifications</ListItem>
                                <ListItem>Widgets</ListItem>
                                <ListItem>Your data</ListItem>
                                <ListItem>Delete account</ListItem>
                            </ListBox>
                        </div>
                    </div>
                </div>

                <div id="mainCol" className="col-lg-8 mb-5">
                    <AnimatePresence mode="wait">
                        {
                            selectedListItem === 0
                                ? <AccountSection key='accountSection' openTodayMenu={openTodayMenu} />
                                : <PasswordSection key='passwordSection' />
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(AccountSettings)