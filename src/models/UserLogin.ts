// Altere a Model conforme a Model do Back
interface UserLogin {
    id: number;
    nome: String;
    foto: String;
    usuario: string;
    senha: string;
    token?: string | null  // Mudamos o parametro do Token para aceitar somente String
}
export default UserLogin;