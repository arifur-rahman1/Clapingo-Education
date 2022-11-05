import React from 'react';
import frame1 from "../Assets/frame1.png"


const Header = () => {
    return (
        <div>
            {/* header part-1 start */}
            <div className='lg:mt-[-50px]'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={frame1} className="lg:max-w-sm" />
                        <div className='lg:mr-56'>
                            <h1 className="text-5xl font-bold">Hone Your english <br /> speaking skills over
                                <br /> <span className='text-emerald-600'>one-on-one</span> video call </h1>
                            <p className="py-6">Practice english convertation with excilent communication  <br /> across the country and speak like a PRO</p>
                            <div className=''>
                                <button className="btn border-none mr-5 rounded-3xl" style={{ backgroundColor: "#FF736A" }}>Get Started</button>
                                <button className="btn rounded-3xl btn-outline btn-error" >Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header part-1 finished */}
        </div>
    );
};

export default Header;
