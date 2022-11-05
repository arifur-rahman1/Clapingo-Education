import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const [items, setItems] = useState([]);
    const onSubmit = data => {
       setItems(data)
       alert("Your data has been stored in local storage")
    };
    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:ml-10">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6"></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" placeholder="Enter Your User Name" className="input input-bordered" {...register("userName", { required: true, maxLength: 20 })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input  type="password" placeholder="password" className="input input-bordered"  {...register("password")} />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-success" type="submit" />
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;