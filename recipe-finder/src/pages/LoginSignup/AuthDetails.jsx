import React, { useEffect, useState } from 'react';
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './AuthDetails.css';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(undefined);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful')
        }).catch(error => console.log(error))
    }

    // Do not render anything if authUser is undefined
    if (authUser === undefined) {
        return null;
    }

    return (
        <div className="auth-details-container">
            {authUser ? (
                <>
                    <p className="signed-in-info">{`Signed In as ${authUser.displayName || authUser.email}`} <button className="sign-out-btn" onClick={userSignOut}>Sign Out</button></p> 
                </>
            ) : (
                <p> Signed Out </p>
            )}
        </div>
    );
}

export default AuthDetails;
