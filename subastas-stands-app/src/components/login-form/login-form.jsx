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
        fetch('http://localhost:3000/signin', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: formValues.email,
            password: formValues.password
          })
        })
        .then(response => response.json())
        .then(data => {
          console.log('success', data);
          setLoggedIn(true, data.id);
          signin();
        })
      }
  }, [formErrors, formValues.email, formValues.password, isSubmit, setLoggedIn, signin])

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
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-black shadow-sm focus:border-azul_abalat focus:outline-none focus:ring-azul_abalat sm:text-sm"
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
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-black shadow-sm focus:border-azul_abalat focus:outline-none focus:ring-azul_abalat sm:text-sm"
              />
            </div>
            <label htmlFor="password" className="block text-sm font-medium text-red-600">
              {formErrors.password}
            </label>
          </div>
    
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <button className="font-medium text-azul_abalat hover:text-azul_abalat" disabled={loading}>
                Recuperar contraseña
              </button>
            </div>
          </div>
        </form>
        <div className="mt-4">
          <button
            onClick={handleSubmit}
            className="flex w-full justify-center rounded-md border border-transparent bg-morado_abalat py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-azul_abalat focus:ring-offset-2"
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
            <Link to='/registro' className="font-medium text-azul_abalat hover:text-azul_abalat">
              No tengo una cuenta
            </Link>
          </div>
        </div>
      </>
      );
}

export default LoginForm;