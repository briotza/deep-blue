import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";

export default function Profile() {
  const { user, email, logout, login } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [editedName, setEditedName] = useState(user?.name || "");
  const [editedEmail, setEditedEmail] = useState(email || "");

  const handleEditProfile = () => setIsEditing((prev) => !prev);

  const handleSaveProfile = async () => {
    if (!user?.id) return;
  
    try {
      const response = await fetch(`http://localhost:3000/user/${user.id}`, { 
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: editedName ,
          email: editedEmail ,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Erro ao atualizar perfil");
      }
  
      alert("Perfil atualizado com sucesso!");
      setIsEditing(false);
  
      login(user.id, editedName, editedEmail);
  
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao atualizar o perfil");
    }
    
  };
  const handleChangePassword = () => setIsChangingPassword((prev) => !prev);

  const handleSavePassword = async () => {
    if (!user?.id) return;

    try {
      const response = await fetch(`http://localhost:3000/user/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: newPassword ,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao alterar senha");
      }

      alert("Senha alterada com sucesso!");
      setNewPassword("");
      setIsChangingPassword(false);
    } catch (error) {
      console.error(error);
      alert("Erro ao alterar senha");
    }
  };

  return (
    <div className="bg-[#94A3B8] min-h-screen p-12 flex flex-col space-y-6 overflow-y-auto">
      {/* Informações do Perfil */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Perfil</h2>

        {!isEditing ? (
          <>
            <p><strong>Nome:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {email}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleEditProfile}
            >
              Editar Perfil
            </button>
          </>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold">Nome</label>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-bold">Email</label>
              <input
                type="email"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleSaveProfile}
            >
              Salvar Alterações
            </button>
          </div>
        )}
      </div>

      {/* Alterar Senha */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Alterar Senha</h2>

        {!isChangingPassword ? (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleChangePassword}
          >
            Alterar Senha
          </button>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold">Nova Senha</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleSavePassword}
            >
              Salvar Nova Senha
            </button>
          </div>
        )}
      </div>

      {/* Botão de Logout */}
      <Link
        to="/home"
        className="bg-gray-700 text-white px-4 py-2 rounded self-start"
        onClick={logout}
      >
        Sair
      </Link>
    </div>
  );
}
