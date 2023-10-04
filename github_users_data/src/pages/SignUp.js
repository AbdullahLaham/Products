import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { loging, signUp } from '../store/authReducer/authSlice';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {users, currentUser} = useSelector((store) => store.auth);

    const handleSubmit = async (values) => { 

      // event.preventDefault()
        // alert(JSON.stringify(values));
        users?.map((user) => {
          if (user.email == values.email) {
            toast.error("there is a user with the same Email")
            return;
          }
          if (user.gitHubUsername == values.gitHubUsername) {
            toast.error("there is a user with the same GitHub username")
            return;
          } 
          
        });

        dispatch(signUp(formik.values));
        navigate('/login')
      }

      let userSchema = yup.object().shape({
        email: yup.string("Email is wrong syntax").required('Email is Required'),
        gitHubUsername: yup.string().required('gitHubUsername is Required'),
        password: yup.string().required('Password is Required'),
      });
    
      const formik = useFormik({
        initialValues: {
          gitHubUsername: '',
          email: '',
          password: '',
        },
        
        onSubmit: values => {
          handleSubmit(values)
        },
        validationSchema: userSchema,
      });
  return (
    <div className='flex items-center justify-center h-[100vh] bg-zinc-700'>
      <div className='w-full lg:w-[40%] md:w-[50%] h-[20rem]  bg-zinc-600'>
        <p className='text-center text-slate-300 mt-5 font-bold  text-2xl'>
            Create An Account
        </p>

        <form className='m-5 flex flex-col gap-y-4' onSubmit={formik.handleSubmit}>
          <input onChange={formik.handleChange} value={formik.values.email} name='email' type='email' className='py-2 px-3 w-full rounded-md bg-zinc-300 placeholder:text-zinc-600' placeholder='Enter your Email' />
          <input onChange={formik.handleChange} value={formik.values.gitHubUsername} name='gitHubUsername' type='text' className='py-2 px-3 w-full rounded-md bg-zinc-300 placeholder:text-zinc-600' placeholder='Enter your GitHub Username' />
          <input onChange={formik.handleChange} value={formik.values.password} name='password' type='password' className='py-2 px-3 w-full rounded-md bg-zinc-300 placeholder:text-zinc-600' placeholder='Enter your Passowrd' />
          <button type='submit' className='w-full text-white bg-emerald-500 py-2 px-3 rounded-sm'>Register</button>
        </form>



      </div>
    </div>
  )
}

export default SignUp
