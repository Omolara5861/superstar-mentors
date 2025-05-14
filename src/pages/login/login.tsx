"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import apiClient from '../../lib/apiClient';
import Cookies from 'js-cookie';
import { getUserRole } from '../../lib/jwtUtils';

const LoginPage = () => {
    const router = useRouter();
    const [form, setForm] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      toast.error('Username and password are required.');
      return;
    }
    setLoading(true);
    try {
      const { data } = await apiClient.post('/auth/token/', {
        username: form.username,
        password: form.password,
      });
      Cookies.set('accessToken', data.access, { secure: true, sameSite: 'Lax' });
      Cookies.set('refreshToken', data.refresh, { secure: true, sameSite: 'Lax' });

      // decode role and route
      const role = getUserRole(data.access);
      if (role === 'Mentor') {
        toast.success('Welcome, Mentor!');
        router.push('/mentor-dashboard');
      } else {
        toast.success('Welcome!');
        router.push('/mentee-dashboard');
      }
    } catch (err: any) {
      toast.error(err.response?.data?.detail || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

    return (
        <div className="lg:min-h-screen flex flex-col lg:flex-row lg:gap-[125px]">
            {/* Left Side (Logo Section) */}
            <div className="lg:w-2/5 bg-[#00000033] flex items-center justify-center h-56 lg:h-auto">
                <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <Image
                            src='/logo.svg'
                            alt="Logo"
                            width={63}
                            height={63}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Right Side (Form Section) */}
            <div className="lg:w-[610px] bg-white p-5  my-10">
                <div className="mb-6">
                    <h1>Welcome {form.username}!</h1>
                    <p className="text-subtext">
                        &quot;Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor.&quot;
                    </p>
                </div>
                <div className="w-full space-y-2 border-grad">
                    <h3 className='text-center mb-8'>Login</h3>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="username" className="uppercase text-text">
                                    username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="username"
                                    placeholder="Username"
                                    value={form.username}
                                    onChange={handleChange}
                                    className="appearance-none rounded-md relative block w-full px-5 py-4 border border-subtext placeholder-text text-text focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="uppercase text-text">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className="appearance-none rounded-md relative block w-full px-5 py-4 border border-subtext placeholder-text text-text focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Forgot password */}
                        <div className="text-sm text-right">
                            <a href="/forgot-password" className="font-medium text-text">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit button */}
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary hover:bg-[#002C1C] text-white font-medium py-4 rounded-lg"
                            >
                                {loading ? 'Signing in…' : 'Login'}
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="relative flex items-center">
                            <div className="flex-grow border-t border-text"></div>
                            <span className="flex-shrink text-text">Or</span>
                            <div className="flex-grow border-t border-text"></div>
                        </div>

                        {/* Login with Google */}
                        <div>
                            <button
                                type="button"
                                className="w-full border border-subtext text-gray-700 font-medium py-4 rounded-md flex justify-center items-center space-x-2 hover:bg-gray-100"
                            >
                                <Image
                                    src="/google.svg"
                                    alt="Google Logo"
                                    width={36}
                                    height={36}
                                />
                                <span>Login with Google</span>
                            </button>
                        </div>
                    </form>

                    {/* Sign Up link */}
                    <div className="text-center text-sm text-text">
                        Don’t have an account?{' '}
                        <a href="/signup" className="font-medium text-primary">
                            Sign up
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;