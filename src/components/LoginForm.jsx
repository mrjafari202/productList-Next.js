import React from 'react';
import { useForm } from "react-hook-form";
import { useLogin } from '@/services/mutation';
import { setCookie } from '@/utils/cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const login = (token) => {
    setCookie('token', token)
}

const LoginForm = () => {
    const router = useRouter()
    const { mutate } = useLogin();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        mutate(data, {
            onSuccess: (response) => {
                login(response.data?.token);
                router.push("/");
            },
            onError: (error) =>toast.error(error.response?.data?.message || "خطایی رخ داده است")
        });
    };

    return (
        <form className='max-w-96 bg-white space-y-16 px-7 py-14 rounded-custom' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col justify-center items-center gap-y-4'>
                <p className='headline-medium text-matn'>فرم ورود</p>
            </div>
            <div className='text-matn/50 body-normal space-y-4'>

                <input
                    type="text"
                    placeholder="نام کاربری"
                    className="input input-bordered text-right bg-inputBg w-full"
                    {...register("username", { required: "Username is required" })}
                />
                {errors.username && <p className="error-message">{errors.username.message}</p>}

                <input
                    type="password"
                    placeholder="رمز عبور"
                    className="input input-bordered text-right bg-inputBg w-full"
                    {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}

                <button className="btn w-full bg-btnCreate" type='submit'>
                    <p className='title-large text-white'>
                        ورود
                    </p>
                </button>

                <Link href={'/register'} className='flex justify-start'>
                    <p className='text-btnCreate body-normal'>ایجاد حساب کاربری!</p>
                </Link>
            </div>
        </form>
    );
};

export default LoginForm;
