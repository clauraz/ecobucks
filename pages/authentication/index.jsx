import { useState } from 'react'

import Input from '../../components/Input'

const RegisterForm = ({ setRegisterDetails }) => {
  const updateRegisterDetails = (e) => {
    const field = e.target.id
    setRegisterDetails((prevState) => ({ ...prevState, [field]: e.target.value }))
  }

  return (
    <form className="flex flex-col">
      <Input onChange={updateRegisterDetails} id="fullname" type="email" placeholder="Fullname" />
      <Input onChange={updateRegisterDetails} id="email" type="email" placeholder="Email" />
      <Input onChange={updateRegisterDetails} id="password" type="password" placeholder="Password" />
      <Input
        onChange={updateRegisterDetails}
        id="passwordConfirmation"
        type="password"
        placeholder="Password confirmation"
      />
    </form>
  )
}

const LoginForm = ({ setLoginDetails }) => {
  const updateDetails = (e) => {
    const field = e.target.id
    setLoginDetails((prevState) => ({ ...prevState, [field]: e.target.value }))
  }

  return (
    <form className="flex flex-col">
      <Input onChange={updateDetails} id="email" type="email" placeholder="Email" />
      <Input onChange={updateDetails} id="password" type="password" placeholder="Password" />
    </form>
  )
}

const Authentication = () => {
  const [viewMode, setViewMode] = useState('login')
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' })

  const [registerDetails, setRegisterDetails] = useState({
    fullname: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  return (
    <div className="bg-img h-screen flex justify-center align-center">
      <div className="flex flex-col mt-28 text-2xl align-center items-center w-[1220px]">
        <h1 className="mb-8 text-3xl font-bold text-white">Welcome to Ecobucks</h1>
        <p className="mb-[128px] text-white ">Please login before you continue!</p>
        <div className="w-full flex">
          <div className="w-[50%]">
            {viewMode === 'login' && <LoginForm setLoginDetails={setLoginDetails} />}
            {viewMode === 'register' && <RegisterForm setRegisterDetails={setRegisterDetails} />}
          </div>
          <div className="w-[50%] h-full flex items-center justify-center bg-slate-100">
            <p>Logo</p>
          </div>
        </div>
        <div className="w-full flex justify-center mt-20 items-center">
          <Input
            className="w-[162px] h-[68px] bg-[#8AC5C4] text-white rounded-2xl"
            type="submit"
            value={viewMode === 'login' ? 'Login' : 'Register'}
          ></Input>
          {viewMode === 'login' && (
            <div className="flex">
              <p className="text-cgrey ml-2">Don't have an account? </p>
              <button onClick={() => setViewMode('register')} className="ml-2 font-bold">
                Sign up!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Authentication
