import React from 'react';
import { heading, health_concern } from '../../assets/data';
import Header from '../Header/Header';

const HealthConcern = () => {
    const health = health_concern.slice(0, 8);
    return (
        <div className='bg-[#0070BC1A] mt-20 nnt'>
            <div className='container_box'>
                <div className='p-4'>
                    <div>
                        <Header title={heading[1].title} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HealthConcern