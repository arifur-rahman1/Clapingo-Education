import React from 'react';
import Header from "../Component/Header"
import CardBody from "../Component/CardBody"
import WorkPart from "../Component/WorkPart"
import Header2 from './Header2';

const HomePage = () => {
    return (
        <div >
            <div className="w-[90vw] lg:w-[85vw] mx-auto">
                <Header></Header>
            </div>
            <Header2></Header2>
            <div className="w-[90vw] lg:w-[85vw] mx-auto">
                <CardBody></CardBody>
                <WorkPart></WorkPart>
            </div>
        </div>
    );
};

export default HomePage;