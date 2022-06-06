interface UserLogin {
    id: number;
    nome: String;
    foto: String;
    usuario: string;
    senha: string;
    token?: string | null
}
export default UserLogin;