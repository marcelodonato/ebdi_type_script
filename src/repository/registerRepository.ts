import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { User } from "../models/userEntity";
import { db, auth } from "../../firebaseConfig";

export const registerUser = async (email: string, password: string, user: User): Promise<void> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid; 

        const userRef = doc(db, 'users', userId);
        await setDoc(userRef, { 
            name: user.name, 
            email, 
            company: user.company, 
            position: user.position 

        });
        console.log("Usuário adicionado com sucesso!");
    } catch (error: any) {
        throw new Error("Erro ao adicionar usuário: " + error.message);
    }
};
