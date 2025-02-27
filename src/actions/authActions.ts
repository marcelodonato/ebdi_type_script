import { authRepository } from "../repository/authRepository";

const authActions = {
    login: async (email: string, password: string) => {
        try {
            const user = await authRepository.login(email, password);
            return user;
        } catch (error: any) {
            throw new Error(error.message);
        }
    },

    logout : async () => {
        try {
            await authRepository.logout();
            
        } catch (error: any) {
            console.error('Erro ao deslogar:', error);
        } 
    }
};

export { authActions };
