// src/SignUpUser.js
import React from 'react';
import { useForm } from 'react-hook-form';
import './index.css';

const SignUpUser = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
    } else {
      alert(JSON.stringify(data, null, 2));
      console.log(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input type="text" {...register('firstName', { required: true })} />
        {errors.firstName && <span>First name is required</span>}
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" {...register('lastName', { required: true })} />
        {errors.lastName && <span>Last name is required</span>}
      </div>
      <div>
        <label>User Name</label>
        <input type="text" {...register('userName', { required: true })} />
        {errors.userName && <span>User name is required</span>}
      </div>
      <div>
        <label>Email</label>
        <input type="text" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>Invalid email address</span>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>Password is required</span>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" {...register('confirmPassword', { required: true })} />
        {errors.confirmPassword && <span>Confirm password is required</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpUser;
