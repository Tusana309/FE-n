import classNames from 'classnames'
import React, { useContext, useState } from 'react'
import Modal from 'react-modal'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { LoginBody, RegisterBody, loginApi, registerApi, uploadImage } from 'src/apis/auth.api'
import { AppContext } from 'src/context/app.context'
import { removeAccessTokenAndProfileFromLS } from 'src/utills/auth'
const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}
Modal.setAppElement('#root')
function Auth() {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [modalIsOpenDK, setIsOpenDK] = React.useState(false)
  const [isPartner, setIsPartner] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function openModalDK() {
    setIsOpenDK(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  function closeModalDK() {
    setIsOpenDK(false)
  }
  const handleOnChangePartner = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPartner(e.target.checked)
  }
  // Process api and more
  const { setIsAuthenticated, setProfile, profile, isAuthenticated } = useContext(AppContext)
  const [file, setFile] = useState<File>()
  const [url, setUrl] = useState<string>()
  const [dataUser, setDataUser] = React.useState({
    email: '',
    password: ''
  })
  const [dataUserRegister, setDataUserRegister] = React.useState<RegisterBody>({
    email: '',
    username: '',
    password: '',
    full_name: '',
    phone: '',
    address: '',
    field: '',
    account_number: '',
    account_name: '',
    bank_name: '',
    qr_img: '',
    role: 0
  })
  const { data, mutate } = useMutation((body: LoginBody) => {
    return loginApi(body)
  })
  const { data: dataRegister, mutateAsync: mutateRegister } = useMutation((body: RegisterBody) => {
    return registerApi(body)
  })
  const uploadFileMutation = useMutation(uploadImage)
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileFromLocal = event.target.files?.[0]
    setFile(fileFromLocal)
  }
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value
    })
  }
  const handleOnChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataUserRegister({
      ...dataUserRegister,
      [e.target.name]: e.target.value
    })
  }
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(dataUser, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.result.user)
        setIsOpen(false)
      }
    })
  }
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let qr_img = ''
    if (file) {
      const form = new FormData()
      form.append('image', file)
      await uploadFileMutation.mutateAsync(form, {
        onSuccess: (data) => {
          qr_img = data.data.result[0].url
          // setUrl(data.data.result[0].url)
        }
      })
    }
    await mutateRegister(
      { ...dataUserRegister, qr_img: qr_img || '', role: isPartner ? 2 : 1 },
      {
        onSuccess: (data) => {
          setIsAuthenticated(true)
          setProfile(data.data.result.user)
          setIsOpenDK(false)
        }
      }
    )
  }
  const handleLogout = () => {
    setIsAuthenticated(false)
    setProfile(null)
    removeAccessTokenAndProfileFromLS()
  }
  const navigate = useNavigate()
  return (
    <div className='flex items-center gap-1'>
      <button
        onClick={openModal}
        className={classNames('p-[6px] border border-white rounded-lg flex items-center gap-2', {
          'border-[#0194f3]': scroll
        })}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          //   dataSlot='icon'
          className='w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
          />
        </svg>
        <p>Đăng Nhập</p>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
        overlayClassName='Overlay'
        className='Modal'
      >
        <div className='px-8 py-6 rounded-2xl overflow-hidden w-[400px]'>
          <h1 className='font-semibold text-2xl mb-8 w-full'>Đăng nhập</h1>
          <form className='flex flex-col w-full' onSubmit={handleLogin}>
            <input
              type='text'
              name='email'
              placeholder='Email'
              onChange={handleOnChange}
              className='py-2 w-full px-4 outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
            />
            <input
              type='password'
              name='password'
              onChange={handleOnChange}
              placeholder='Mật khẩu'
              className='py-2 px-4 w-full outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
            />
            <button className='py-[8px] px-4 bg-[#0194f3] text-white rounded-lg'>Đăng nhập</button>
          </form>
        </div>
      </Modal>
      <button onClick={openModalDK} className='py-[8px] px-4 bg-[#0194f3] text-white rounded-lg'>
        Đăng Ký
      </button>
      <Modal
        isOpen={modalIsOpenDK}
        onRequestClose={closeModalDK}
        style={customStyles}
        contentLabel='Example Modal'
        overlayClassName='Overlay'
        className='Modal'
      >
        <div className='px-8 mt- py-6 rounded-2xl w-[400px] overflow-y-scroll no-scrollbar h-[480px]'>
          <h1 className='font-semibold text-2xl mb-8 w-full'>Đăng ký</h1>
          <form className='flex flex-col w-full' onSubmit={handleRegister}>
            <input
              type='text'
              name='username'
              placeholder='Username'
              onChange={handleOnChangeRegister}
              className='py-2 w-full px-4 outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
            />
            <input
              type='text'
              name='email'
              placeholder='Email'
              onChange={handleOnChangeRegister}
              className='py-2 w-full px-4 outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
            />
            <input
              type='text'
              name='full_name'
              placeholder='Fullname'
              onChange={handleOnChangeRegister}
              className='py-2 w-full px-4 outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
            />
            <input
              type='text'
              name='phone'
              placeholder='Phone'
              onChange={handleOnChangeRegister}
              className='py-2 w-full px-4 outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
            />
            <input
              type='text'
              name='address'
              placeholder='Address'
              onChange={handleOnChangeRegister}
              className='py-2 w-full px-4 outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
            />
            <input
              type='password'
              name='password'
              placeholder='Mật khẩu'
              onChange={handleOnChangeRegister}
              className='py-2 px-4 w-full outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
            />
            {isPartner && (
              <div>
                <input
                  type='text'
                  name='field'
                  placeholder='Field'
                  onChange={handleOnChangeRegister}
                  className='py-2 w-full px-4 outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
                />
                <input
                  type='text'
                  name='account_number'
                  placeholder='Account Number'
                  onChange={handleOnChangeRegister}
                  className='py-2 w-full px-4 outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
                />
                <input
                  type='text'
                  name='account_name'
                  placeholder='Account Name'
                  onChange={handleOnChangeRegister}
                  className='py-2 w-full px-4 outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
                />
                <input
                  type='text'
                  name='bank_name'
                  placeholder='Bank Name'
                  onChange={handleOnChangeRegister}
                  className='py-2 w-full px-4 outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
                />
                <input
                  type='file'
                  name='qr_img'
                  accept='.jpg,.jpeg,.png'
                  onChange={onFileChange}
                  // placeholder='Address'
                  className='py-2 w-full px-4 outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
                />
              </div>
            )}
            <div className='flex justify-start py-2 mx-4 items-center gap-2'>
              <label htmlFor='partner'>isPartner</label>
              <input id='partner' type='checkbox' onChange={handleOnChangePartner} />
            </div>
            <button className='py-[8px] px-4 bg-[#0194f3] text-white rounded-lg'>Đăng ký</button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default Auth
