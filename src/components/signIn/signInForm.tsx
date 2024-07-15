import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { signIn } from '@/apis/auth';
import type { SignInRequestType } from '@/schema/auth';
import classNames from 'classnames'; // 글로벌로 지정?
import styles from './signIn.module.scss';

const cx = classNames.bind(styles);

function LoginForm() {
  const { register, handleSubmit, reset } = useForm<SignInRequestType>();

  const mutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      // alert('Login successful');
      localStorage.setItem('token', data.accessToken); // 토큰 저장
      reset();
    },
    onError: () => {
      // alert('Login failed');
    },
  });

  const onSubmit = (data: SignInRequestType) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='email'>
          <input type='text' placeholder='이메일' className={cx('Email-input')} {...register('email', { required: true })} />
        </label>
      </div>
      <div>
        <label htmlFor='password'>
          <input type='password' placeholder='비밀번호' {...register('password', { required: true })} />
        </label>
      </div>
      <button type='submit'>로그인</button>
      회원이 아니신가요?
      <button type='button'>가입하기</button>
    </form>
  );
}

export default LoginForm;
