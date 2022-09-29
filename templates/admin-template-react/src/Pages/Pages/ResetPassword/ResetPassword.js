import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button, Input } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function ResetPassword() {

    useEffect(() => { document.title = `Reset Password - ${defaultTitle}` }, []);

    return (
        <div className="container">
            <div className="text-center my-5">
                <h2>Reset password</h2>
                <p>Enter your email to reset your password</p>
            </div>

            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card shadow-5">
                        <div className="card-body">
                            <div className="form-group">
                                <label className="d-block">Email</label>
                                <Input className="w-100" placeholder="Enter your email"></Input>
                            </div>

                            <div className="text-center">
                                <Button className="primary">Reset password</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(ResetPassword)