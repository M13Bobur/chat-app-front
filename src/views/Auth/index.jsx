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
    setLoading(true);
    e.preventDefault();
    let numberPattern = /\d+/g;

    const data = {
      login: login.match(numberPattern).join(''),
      password,
    };

    serviceAuth
      .login(data)
      .then((res) => {
        setLoading(false);
        const decode = jwtDecode(res.data?.token);
        localStorage.setItem('access_token', res.data?.token);
        localStorage.setItem('role', decode?.role);
        localStorage.setItem('org_id', decode?._id);
        localStorage.setItem(
          'username',
          decode?.title?.fullname
            ? decode?.title?.fullname
            : decode?.title?.lastName
            ? decode?.title?.lastName + ' ' + decode?.title?.firstName
            : decode?.title
        );
        dispatch(setToken(res.data?.token));
        dispatch(setRole(decode?.role));
        dispatch(
          setUsername(
            decode?.title?.fullname
              ? decode?.title?.fullname
              : decode?.title?.lastName
              ? decode?.title?.lastName + ' ' + decode?.title?.firstName
              : decode?.title
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
              Тизимга кириш
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
              <label htmlFor='phone' className='label-text'>
                Телефон рақам
              </label>
              <div>
                <InputMask
                  maskPlaceholder={null}
                  onChange={(e) => setLogin(e.target.value)}
                  mask='(99)-999-99-99'
                  value={login}
                  maskChar=''
                  alwaysShowMask={false}
                >
                  {() => (
                    <Input
                      required
                      id='phone'
                      className='phone-input'
                      addonBefore='+998'
                    />
                  )}
                </InputMask>
              </div>
            </div>
            <div className='second-input'>
              <label htmlFor='password' className='label-text'>
                Парол
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
            <div className='switch-login'>
              <Switch size='small' defaultChecked={false} />
              <span className='label-text'>Ишончли қурилма</span>
            </div>
            <button
              type='submit'
              disabled={!(login.length && password.length) ? true : false}
              className='enter_btn'
            >
              Кириш
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
