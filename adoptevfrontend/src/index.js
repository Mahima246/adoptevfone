import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import signin from './components/signin';

ReactDOM.render(
  <React.StrictMode>
    <signin />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Formik, Field, Form } from 'formik';

// const Basic = () => (
//   <div>
//     <h1>Sign Up</h1>
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//       }}
//       onSubmit={async values => {
//         await new Promise(r => setTimeout(r, 500));
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       <Form>
//         <label htmlFor="firstName">First Name</label>
//         <Field id="firstName" name="firstName" placeholder="Jane" />

//         <label htmlFor="lastName">Last Name</label>
//         <Field id="lastName" name="lastName" placeholder="Doe" />

//         <label htmlFor="email">Email</label>
//         <Field
//           id="email"
//           name="email"
//           placeholder="jane@acme.com"
//           type="email"
//         />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   </div>
// );

// ReactDOM.render(<Basic />, document.getElementById('root'));
