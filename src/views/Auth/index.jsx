import React, { useState } from 'react';
import './style.css';
import { Input } from 'antd';
import Spinner from '../../components/Spinner/FullScreen';
import serviceAuth from '../../services/auth';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import {
  setRole,
  setToken,
  setUsername,
} from '../../redux/modules/auth/actions';
import InputMask from 'react-input-mask';
import { Switch } from 'antd';

export default () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const formHandler = (e) => {
    console.log(login, password)
    setLoading(true);
    e.preventDefault();

    const data = {
      username: login,
      password,
    };

    serviceAuth
      .login(data)
      .then((res) => {
        setLoading(false);
        const decode = jwtDecode(res.data?.token);
        localStorage.setItem('access_token', res.data?.token);
        localStorage.setItem(
          'firstname',
          decode?.firstname
        );
        dispatch(setToken(res.data?.token));
        dispatch(
          setUsername(
            decode?.firstname
          )
        );
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (loading) return <Spinner />;
  return (
    <div
      style={{
        backgroundColor: '#E5E5E5',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className='login_area'>
        <div className='login_content'>
          <h2 style={{ marginBottom: '5px' }}>
            <span style={{ verticalAlign: 'middle' }} className='sektor_text'>
              Kirish oynasi
            </span>
          </h2>
          <form
            onSubmit={(e) => formHandler(e)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'auto',
              width: '100%',
              gap: 20,
            }}
          >
            <div className='first-input'>
              <label htmlFor='password' className='label-text'>
                Login
              </label>
              <div className='surroundedInput'>
                <Input
                  onChange={(e) => setLogin(e.target.value)}
                  id='password'
                  placeholder=''
                  className='password-input'
                />
              </div>
            </div>
            <div className='second-input'>
              <label htmlFor='password' className='label-text'>
                Parol
              </label>
              <div className='surroundedInput'>
                <Input.Password
                  onChange={(e) => setPassword(e.target.value)}
                  id='password'
                  placeholder='********'
                  className='password-input'
                />
              </div>
            </div>
            <button
              type='submit'
              disabled={!(login.length && password.length) ? true : false}
              className='enter_btn'
            >
              Kirish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
