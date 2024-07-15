import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import type { SignUpRequestType } from '@/schema/auth';
import { signUp } from '@/apis/auth';

function SignUpForm() {
  const { register, handleSubmit, reset } = useForm<SignUpRequestType>();
  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      // alert('Registration successful');
      localStorage.setItem('token', data.accessToken); // 토큰 저장
      reset();
    },
    onError: () => {
      // alert('Registration failed');
    },
  });

  const onSubmit = (data: SignUpRequestType) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='email'>
          이메일
          <input type='text' {...register('email', { required: true })} />
        </label>
      </div>
      <div>
        <label htmlFor='password'>
          비밀번호
          <input type='password' {...register('password', { required: true })} />
        </label>
      </div>
      <div>
        <input type='password' {...register('passwordConfirmation', { required: true })} />
      </div>
      <div>
        <label htmlFor='nickname'>
          닉네임
          <input type='text' {...register('nickname', { required: true })} />
        </label>
      </div>
      <button type='submit'>가입하기</button>
    </form>
  );
}

export default SignUpForm;
