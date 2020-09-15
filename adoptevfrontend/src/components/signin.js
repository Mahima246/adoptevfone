import React from 'react';
import { useFormik, Formik, Form } from 'formik';
import './signin.css';
import * as yup from 'yup';

class signin extends React.Component {
    render(){
    return (
      <div >
          hey
        <div className="container-login100 b1">
		<div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
			<form className="login100-form validate-form">
				<span className="login100-form-title p-b-37">
					Sign In
				</span>

				<div className="wrap-input100 validate-input m-b-20" data-validate="Enter Phone Number or email">
					<input className="input100" type="text" name="username" placeholder="Phone number or Email"/>
					<span className="focus-input100"></span>
				</div>

				<div className="wrap-input100 validate-input m-b-25" data-validate = "Enter password">
					<input className="input100" type="password" name="pass" placeholder="Password"/>
					<span className="focus-input100"></span>
				</div>

				<div className="container-login100-form-btn">
					<button className="login100-form-btn">
						Sign In
					</button>
				</div>

				<div className="text-center p-t-57 p-b-20">
					<span className="txt1">
						Or login with
					</span>
				</div>

				<div className="flex-c p-b-112">
					<a href="#" className="login100-social-item">
						<i className="fa fa-facebook-f"></i>
					</a>

					<a href="#" className="login100-social-item">
						<img src="images/icons/icon-google.png" alt="GOOGLE" />
					</a>
				</div>


			</form>

			
		</div>
	</div>


      </div>

    );
    }
}


export default signin;