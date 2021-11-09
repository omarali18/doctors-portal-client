import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import { Password } from "@mui/icons-material";

// Initialize firebase app
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();;

    // Register user
    const registerUser = (email, Password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, Password)
            .then(result => {
                setAuthError("")
                const newUser = { email, displayName: name }
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => { })
                    .catch((error) => { })
                history.replace("/")
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
                setAuthError("")
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // Signin With Google
    const signinWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const destination = location?.state?.from || "/"
                history.replace(destination)
                setAuthError("")
            })
            .catch(error => {
                setAuthError(error.message)
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
        signinWithGoogle,
        logout,
    }
}

export default useFirebase