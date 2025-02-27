import { registerUser } from "../repository/registerRepository";
import { User } from "../models/userEntity";

export const createUser = async (email: string, password: string, user: User): Promise<void> => {
    try {
        await registerUser(email, password, user);
    } catch (error: any) {
        throw new Error("Erro ao criar o usuário: " + error.message);
    }
};
