"use client"

import { useUserAuth } from "./shopping-list/_utils/auth-context";
import React from "react";
 
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

const handleLogIn = async () => {
    await gitHubSignIn();
}

const handleLogOut = async () => {
    await firebaseSignOut();
}


export default function Page() {
    return(
        <div>
        {user ? (
          <div>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <button onClick={handleLogOut}>Logout</button>
            <a href="/shopping-list">Go to Shopping List</a>
          </div>
        ) : (
          <div>
            <p>You are not logged in.</p>
            <button onClick={handleLogIn}>Login with GitHub</button>
          </div>
        )}
      </div>
    )
};