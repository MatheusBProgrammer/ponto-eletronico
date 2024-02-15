import React from "react";
import styles from "./styles/Navbar.module.css";
import { ImMenu } from "react-icons/im";
import DropdownMenu from "../components/DropdownMenu"; // Ajuste o caminho conforme necessário

function Navbar({ user }) {
  // Definindo as opções do DropdownMenu
  const options = [
    {
      to: "/cadastro",
      name: "Cadastro",
      action: () => console.log("Cadastro clicado"),
    },
    {
      to: "/biometria",
      name: "Biometria",
      action: () => console.log("Biometria clicado"),
    },
    {
      to: "/relatorios",
      name: "Relatórios",
      action: () => console.log("Relatórios clicado"),
    },
    // Adicione mais opções conforme necessário
  ];

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <DropdownMenu
          name={<ImMenu style={{ fontSize: "24px", color: "#fff" }} />}
          options={options}
        />
      </div>
      <div>logo</div>
      <div>usuário</div>
    </div>
  );
}

export default Navbar;
