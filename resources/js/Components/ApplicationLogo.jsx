
import React from 'react';
// import logoUrl from 'assets/img/logo.png';

const ApplicationLogo = (props) => {
    const logoUrl = '/assets/img/logo.png'; // Replace with the actual path to your logo in the storage directory
     // Replace with the actual path to your logo in the storage directory

    return (
        <img {...props} src={logoUrl} alt="Logo" />
    );
};

export default ApplicationLogo;
