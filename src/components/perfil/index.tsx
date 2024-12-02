import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext"

export default function Profile() {
  const { email, password, login, logout } = useAuth();
  const [username, setUsername] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const handleEditProfile = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    alert("Perfil atualizado com sucesso!");
  };

  const handleChangePassword = () => {
    setIsChangingPassword((prev) => !prev);
  };

  const handleSavePassword = () => {
    setNewPassword("");
    setIsChangingPassword(false);
    alert("Senha alterada! Um e-mail de confirmação foi enviado.");
  };

  return (
    <div className="bg-[#94A3B8] h-[100%] p-12 flex flex-col space-y-6 overflow-y-auto">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Perfil</h2>

        {!isEditing ? (
          <>
            <p><strong>Username:</strong> {username}</p>
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
              <label className="block text-sm font-bold">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-bold">Email</label>
              <input
                type="email"
                value={email || ""}
                onChange={(e) => login(e.target.value, password || "")}
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

      <Link to="/"
        className="bg-gray-700 text-white px-4 py-2 rounded self-start"
        onClick={logout}
      >
        Sair
      </Link>
    </div>
  );
}
