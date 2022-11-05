import React from 'react';
import card1 from '../Assets/card1.png'
import card2 from '../Assets/card2.png'
import card3 from '../Assets/card3.png'

const CardBody = () => {

    const serviceDAta = [
        {
          id: 1,
          title: "SEND MONEY",
          desc: "Send money from any where with our banking website. ",
          image: card1,
        },
        {
          id:2,
          title: "CASH IN",
          desc: "You can deposite your money from any branch of us",
          image: card2,
        },
        {
          id: 3,
          title: "BILL PAY",
          desc: "you can pay any kind of bill with our banking website",
          image: card3,
        }
    ]

    return (
        <div>
            <h1 className='text-4xl font-bold flex justify-center my-12'>What we offer ?</h1>
            <div className='grid grid-cols-3 gap-4 mb-12'>
                {/* card one */}
                <div className='' style={{ backgroundImage: `url(${card1})` }}>
                    <div className="card w-full glass pb-3">
                        <figure><img src={card1} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-cyan-400">Customized Curriculum</h2>
                            <p>Customised sessions and module for <br /> basic, intermediate and advanced <br /> learner</p>

                        </div>
                    </div>
                </div>

                {/* card two */}
                <div style={{ backgroundImage: `url(${card2})` }}>
                    <div className="card  w-full glass pb-9">
                        <figure><img src={card2} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-cyan-400">Experimental Learning</h2>
                            <p>Do not study english rather consume <br /> and use it</p>

                        </div>
                    </div>
                </div>

                {/* card three */}
                <div style={{ backgroundImage: `url(${card3})` }}>
                    <div className="card  w-full glass pb-9">
                        <figure><img src={card3} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-cyan-400">Shadowing Methode</h2>
                            <p>Think and speake in english rather than <br /> translate it from mother tongue</p>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CardBody;