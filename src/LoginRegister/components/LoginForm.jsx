import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert, Form, InputGroup } from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginForm = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userNotFound, setUserNotFound] = useState(false);
  const [visibilityPassword, setVisibilityPassword] = useState('password');
  const [icon, setIcon] = useState('bx bx-low-vision');

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get('https://64670f90ba7110b663ae7915.mockapi.io/users');
        setUsers(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);

  const leakPassword = () => {
    if (visibilityPassword === 'password') {
      setIcon('bx bx-show');
      setVisibilityPassword('text');
    } else {
      setIcon('bx bx-low-vision');
      setVisibilityPassword('password');
    }
  };

  const successLogin = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Berhasil masuk!',
    });
  };

  const login = (e) => {
    e.preventDefault();
    const user = users.find((item) => item.email === email && item.password === password);
    if (user) {
      localStorage.setItem('user-info', JSON.stringify(user));
      successLogin();
      navigate('/home');
    } else {
      setUserNotFound(true);
    }
  };

  return (
    <div className="container-login">
      <h1 className="fw-bold fs-1 mt-5">
        Selamat Datang di{' '}
        <NavLink to="/" className="logo text-decoration-none">
          Mari<span>Baca</span>
        </NavLink>
      </h1>
      <p className="fw-light fs-5">Silakan isi data kamu yah!</p>

      <form onSubmit={login} name="form" className="mt-5">
        {userNotFound == false ? null : (
          <div className="text-center py-2">
            <Alert variant="danger">
              <span className="fw-semibold">Warning!</span> Pengguna tidak ditemukan!
            </Alert>
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" name="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Kata Sandi
          </label>
          <InputGroup>
            <Form.Control type={visibilityPassword} className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <InputGroup.Text onClick={leakPassword}>
              <i className={icon}></i>
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div className="mb-3 form-forget text-end">
          <p className="forget-password">Lupa kata sandi?</p>
        </div>
        <button type="submit" className="btn btn-login-form w-100 mt-4 fw-bold">
          Masuk
        </button>
        <p className="text-regist text-center  mt-3">
          Belum punya akun?{' '}
          <NavLink to="/register" className="text-decoration-none">
            Klik disini
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;