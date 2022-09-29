import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button, Input, PasswordTextBox } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function SignUp() {

    useEffect(() => { document.title = `Sign Up - ${defaultTitle}` }, []);

    return (
        <div className="container">
            <div className="text-center my-5">
                <h2>Welcome!</h2>
                <p>Sign up for the best user experience</p>
            </div>

            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card shadow-5">
                        <div className="card-body">
                            <div className="form-group">
                                <label className="d-block">Name</label>
                                <Input className="w-100" placeholder="Enter your name"></Input>
                            </div>

                            <div className="form-group">
                                <label className="d-block">Company</label>
                                <Input className="w-100" placeholder="Enter your company name"></Input>
                            </div>

                            <div className="form-group">
                                <label className="d-block">Email</label>
                                <Input className="w-100" placeholder="Enter your email"></Input>
                            </div>

                            <div className="form-group">
                                <label className="d-block">Password</label>
                                <PasswordTextBox className="w-100" placeholder="Enter a password"></PasswordTextBox>
                            </div>

                            <div className="text-center">
                                <Button className="primary">Sign up</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(SignUp)