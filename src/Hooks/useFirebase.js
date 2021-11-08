import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import { Password } from "@mui/icons-material";

// Initialize firebase app
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()

    // Register user
    const registerUser = (email, Password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, Password)
            .then(result => {
                setAuthError("")
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // login user
    const loginUser = (email, Password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, Password)
            .then(result => {
                console.log(location);
                const destination = location?.state?.from || "/"
                history.replace(destination)
                setAuthError("")
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // Logiut user
    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false));
    }

    // Onserver user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
    }
}

export default useFirebase