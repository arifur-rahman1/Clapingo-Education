import React from 'react';
import frame2 from "../Assets/frame2.png"

const Header2 = () => {
    return (
        <div>
               <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <img src={frame2} className="" />
                    <div className='lg:ml-48'>
                        <p className='text-sm text-emerald-600 font-bold'>Book a trail</p>
                        <h1 className="text-3xl font-bold">Start your English <br /> speaking journey today!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut <br /> assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn border-none mr-5 rounded-3xl" style={{ backgroundColor: "#FF736A" }}>Book a trial</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header2;