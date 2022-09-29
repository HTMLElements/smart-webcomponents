import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button, Input, PasswordTextBox, CheckBox } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function SignIn() {

    useEffect(() => { document.title = `Sign In - ${defaultTitle}` }, []);

    return (
        <div className="container">
            <div className="text-center my-5">
                <h2>Welcome back, John!</h2>
                <p>Please sign in to your account to continue</p>
            </div>

            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card shadow-5">
                        <div className="card-body">
                            <div className="img-as-background square rounded-circle w-125 mx-auto mb-4">
                                <img src="assets/images/phonebook/mark.png" alt='avatar'/>
                            </div>

                            <div className="form-group">
                                <label className="d-block">Email</label>
                                <Input className="w-100"></Input>
                            </div>

                            <div className="form-group">
                                <label className="d-block">Password</label>
                                <PasswordTextBox className="w-100"></PasswordTextBox>
                                <a href="#" className="small">Forgot your password?</a>
                            </div>

                            <div className="form-group">
                                <CheckBox checked>Remember me</CheckBox>
                            </div>

                            <div className="text-center">
                                <Button className="primary">Sign in</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(SignIn)