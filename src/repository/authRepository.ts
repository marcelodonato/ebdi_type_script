import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const authRepository = {
    login: async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error: any) {
            throw new Error('Login failed: ' + error.message);
        }
    },

    logout: async () => {
        try {
            await signOut(auth);
        } catch (error: any) {
            throw new Error('Logout failed: ' + error.message);
        }
    }

};

export { authRepository };
