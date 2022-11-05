import React from 'react';
import plan1 from '../Assets/plans1.png'

const WorkPart = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl my-7 font-bold'>How it works ?</h1>
                <div className='grid lg:grid-cols-3 gap-4 my-4'>

                    <div className='grid grid-rows-2 '>
                        {/* card1 */}
                        <div className="card w-96 h-48 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">1.Create Account</h2>
                                <p>Create your account using phone number or email and take a free trial at ₹1.</p>

                            </div>
                        </div>
                        {/* card2 */}
                        <div className="card w-96 h-48 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">3. Select time slot</h2>
                                <p>Subscribe & select any time slot between 10 AM to 12 midnight.</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img src={plan1} alt="" />
                    </div>
                    <div className='grid grid-rows-2'>
                        {/* card1 */}
                        <div className="card w-96 h-48 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">2. Subscribe</h2>
                                <p>Choose your preferred duration and select subscription package for your sessions. </p> 
                            </div>
                        </div>
                        {/* card2 */}
                        <div className="card w-96 h-48 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">4. You are done</h2>
                                <p>That’s it! Start practicing and reach your learning goal in speaking.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkPart;