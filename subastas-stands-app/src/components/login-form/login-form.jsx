import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function LoginForm ({ setLoggedIn, signin }) {

  const initialValues = {
    email: '',
    password: '',
}

const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [loading, setLoading] = useState(false);
const [loginError, setLoginError] = useState(false);
const [loginErrorMessage, setLoginErrorMessage] = useState("");
const [isSubmit, setIsSubmit] = useState(false);

const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
}

const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setFormErrors(validate(formValues));
    setIsSubmit(true);
};

useEffect(() => {
  if(Object.keys(formErrors).length === 0 && isSubmit){
    const fetchData = async () => {
      try {
        const response = await fetch('https://subastas-stand-licon-a5fc970ae98d.herokuapp.com/signin', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: formValues.email,
            password: formValues.password
          })
        });

        if (!response.ok) {
          setLoginError(true);
          setLoginErrorMessage('Contraseña o correo invalidos');
          throw new Error('Server responded with a 400 status code');
        } else {
          const data = await response.json();
          setLoggedIn(true, data.id);
          signin();

        }
      } catch (error) {
        console.error("Error during fetch: ", error);
      } finally {
        setLoading(false);
        setIsSubmit(false);
      }
    };
    fetchData();
  }
}, [formErrors, formValues.email, formValues.password, isSubmit])

const validate = (values) => {
    const errors = {};
    const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if(!values.email) {
        errors.email = 'El correo es obligatorio';
    } else if (!regex.test(values.email)) {
        errors.email = 'Correo invalido';
    }

    if(!values.password) {
        errors.password = 'La contraseña es obligatoria';
    } else if (values.password.length <= 3) {
        errors.password = 'La contraseña debe tener al menos 4 caracteres';
    }
    return errors;
}


    return(
      <>
        <form className="space-y-6">
          {
            loginError ? 
            <div>
              <label className="block text-sm font-medium text-red-600">
                {loginErrorMessage}
              </label>
            </div>
            : null
          }
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electronico
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleChange}
                required
                disabled={loading}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-black shadow-sm focus:border-principal focus:outline-none focus:ring-principal sm:text-sm"
              />
            </div>
            <label htmlFor="email" className="block text-sm font-medium text-red-600">
              {formErrors.email}
            </label>
          </div>
    
          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={handleChange}
                disabled={loading}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-black shadow-sm focus:border-principal focus:outline-none focus:ring-principal sm:text-sm"
              />
            </div>
            <label htmlFor="password" className="block text-sm font-medium text-red-600">
              {formErrors.password}
            </label>
          </div>
        </form>
        <div className="mt-4">
          <button
            onClick={handleSubmit}
            className="flex w-full justify-center rounded-md border border-transparent bg-contraste py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : "Ingresar"}
            
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm">
            <Link to='/registro' className="font-medium text-principal hover:text-principal">
              No tengo una cuenta
            </Link>
          </div>
        </div>
      </>
      );
}

export default LoginForm;