import React from 'react';

const UserAppoinmentListShow = ({appointment}) => {
    console.log(appointment)
    return (
        <div className="col mt-5" >
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    );
};

export default UserAppoinmentListShow;