import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import Logo from '../../assets/images/logo.png'
import LogoLicon from '../../assets/images/logo-licon.png'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


const navigation = [
    { 
      name: 'Inicio', 
      href: '/'
    },
    {
      name: 'Galería', 
      href: '/galeria-arte'
    },
    {
      name: 'Muro del Reconocimiento',
      href: '/galeria'
    },
]

const navigation_logged = [

    {
      name: "Cartera Cryptolicoins",
      href: '/cartera-desc',
      target: '_self'
    }
]

const footerNavigation = {

  legal: [
    { name: 'Aviso de Privacidad', 
      href: 'https://licon.com.mx/aviso-de-privacidad/' 
    },
  ],
}

class Layout extends Component{

  render() {
    const {logged_in, children, logout} = this.props;
    const logged = logged_in;
    return (
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Popover as="header" className="relative">
            <div className="bg-white pt-6 pb-0">
              <nav
                className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
                aria-label="Global"
              >
                <div className="flex flex-1 items-center">
                  <div className="flex w-full items-center align-middle justify-between md:w-auto">
                    <Link to="/">
                      <span className="sr-only">Wallet Cryptolicoins</span>
                      <img
                        className="h-6 w-auto lg:h-8"
                        src={Logo}
                        alt="logo-empresa"
                      />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-principal p-2 text-white focus:outline-none focus:ring-2 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="hidden space-x-8 md:ml-10 md:flex">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-base font-medium text-principal hover:text-gray-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                    {
                      logged ? (navigation_logged.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          target={item.target}
                          rel="nonreferrer noreferrer"
                          className="text-base font-medium text-principal hover:text-gray-300"
                        >
                          {item.name}
                        </Link>
                      )))
                      : null
                    }
                  </div>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-6">
                  { logged ?  
                     <Link
                        to='/'
                        onClick={logout}
                        className="inline-flex items-center rounded-md border border-transparent bg-principal px-4 py-2 text-base font-medium text-white"
                      >
                     Salir
                   </Link>
                  : <>
                    <Link to="/registro" className="text-base font-medium text-principal">
                      Registrarse
                    </Link>
                    <Link
                      to="/login"
                      className="inline-flex items-center rounded-md border border-transparent bg-principal px-4 py-2 text-base font-medium text-white"
                    >
                      Ingresar
                    </Link>
                  </>}
                  
                </div>
              </nav>
              <hr className='mt-4 bg-principal w-full h-2 lg:h-4' />
            </div>
  
            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel focus className="absolute inset-x-0 top-2 origin-top transform p-2 transition md:hidden">
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <Link to='/'>
                      <img
                        className="h-4 w-auto"
                        src={Logo}
                        alt="logo-empresa"
                      />
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="pt-5 pb-6">
                    <div className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-black"
                        >
                          {item.name}
                        </Link>
                      ))}
                      {
                        logged ? navigation_logged.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            target={item.target}
                            rel="nonreferrer noreferrer"
                            className="block rounded-md px-3 py-2 text-base font-medium text-black"
                          >
                            {item.name}
                          </Link>
                        ))
                        : null
                      }
                    </div>
                    { logged ? <div className="mt-6 px-5">
                      <Link
                        to='/'
                        onClick={logout}
                        className="block w-full rounded-md bg-principal py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700"
                      >
                        Salir
                      </Link>
                    </div> : 
                    <>
                    <div className="mt-6 px-5">
                      <Link
                        to="/registro"
                        className="block w-full rounded-md bg-principal py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700"
                      >
                        Registrarse
                      </Link>
                    </div>
                    <div className="mt-6 px-5">
                      <p className="text-center text-base font-medium text-gray-500">
                        Ya tengo una cuenta.{' '}
                        <Link to="/login" className="text-contraste hover:underline">
                          Ingresar
                        </Link>
                      </p>
                    </div>
                    </> }
                    
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <main className="container mx-auto sm:px-6 lg:px-8">
            {children}
          </main>
          <footer className="bg-gray-50" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
              Footer
            </h2>
            <div className="mx-auto max-w-md px-4 sm:max-w-7xl sm:px-6 lg:px-8 lg:pt-10">
              <div className="xl:grid xl:grid-cols-3 xl:gap-8 justify-center">
                <div className="py-4 sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-32 w-auto"
                        src={ LogoLicon }
                        alt="logo_grupolicon"
                    />
                </div>
                <div className="mt-0 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
                  <div className="md:grid md:grid-cols-1 md:gap-8">
                    <div className="mt-4 md:mt-0">
                      <h3 className="text-base font-medium text-gray-900">Legal</h3>
                      <ul className="mt-4 space-y-4">
                        {footerNavigation.legal.map((item) => (
                          <li key={item.name}>
                            <a target="_blank" rel='noreferrer' href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 border-t border-gray-200 py-8">
                <p className="text-base text-gray-400 xl:text-center">
                  &copy; 2023 2024 Polar Multimedia. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout;