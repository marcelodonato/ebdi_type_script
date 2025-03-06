import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { User } from "../models/userEntity";

export const userRepository = {
    async getUserByUid(uid: string): Promise<User | null> {
      try {
        const userRef = doc(db, "users", uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          return userDoc.data() as User;
        } else {
          console.log("Usuário não encontrado");
          return null;
        }
      } catch (error) {
        console.error("Erro ao buscar o usuário:", error);
        throw new Error("Erro ao buscar os dados do usuário");
      }
    }
};
