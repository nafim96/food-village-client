import React from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import ManageDetails from '../ManageDetails/ManageDetails';

const Manage = () => {
    return (
        <div>
            <AdminHeader></AdminHeader>
            Hello manage
           <ManageDetails></ManageDetails>
        </div>
    );
};

export default Manage;