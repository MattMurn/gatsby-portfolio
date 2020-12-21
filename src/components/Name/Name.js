import React from 'react';
import './Name.scss';

export const Name = ({first, last}) => (
<section className="main__name-container">
    <div className="name_wrapper">
            <h1 className="first_name"> {first}</h1>
            <h1 className="last_name">{last} </h1>
    </div>
</section>
)
export const Initials = () => {
    
    return (
        <div className="initials_container">
            <h1 className="name_duplicate">M</h1>
            <h1 className="name_duplicate">M</h1>
        </div>
    )
}
