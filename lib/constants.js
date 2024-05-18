import LandingView from '../views/Landing'
import SignUpView from '../views/SignUp'
import ButtonsView from '../views/Buttons'
import TextView from '../views/Text'

export const key = 'AIzaSyC83JD-EVvo8EJqxnZo2vvzTHjA0VIZP9g'

export const weights = {
  100: 'Thin',
  200: 'Extralight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'Semibold',
  700: 'Bold',
  800: 'Extrabold',
  900: 'Black'
}

export const views = [
  {
    name: 'Landing',
    component: LandingView
  },
  {
    name: 'Sign up',
    component: SignUpView
  },
  {
    name: 'Buttons',
    component: ButtonsView
  },
  {
    name: 'Text',
    component: TextView
  }
]

export const sharingApi = 'https://s.fontkey.design/'