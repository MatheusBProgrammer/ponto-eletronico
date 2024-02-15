import React from "react";
import styles from "./styles/AuthPage.module.css";
import { Box, TextField } from "@mui/material";
import Button from "../components/Button";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import logo from "../imgs/logo.png";

function AuthPage() {
  const [data, setData] = React.useState({
    username: "",
    password: "",
  });

  const { user, setUser } = React.useContext(UserContext);

  const navigate = useNavigate();

  const handleOnChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.id]: event.target.value,
    }));
    console.log(data.username);
  };

  const onSubmit = async () => {
    await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        alert(responseData.message);
        // Atualiza o estado do usuário corretamente
        setUser({ username: data.username });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        alert("Erro ao fazer login");
      });
  };

  React.useEffect(() => {}, [user]);

  return (
    <div className={styles.container}>
      <img src={logo} alt="logo.png" />
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "40ch",
          width: "50ch",
          boxShadow: "0px 0px 3px 0px black",
          borderRadius: 5,
          "& .MuiTextField-root": {
            width: "30ch",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          error={false}
          id="username"
          label="Nome de Usuário"
          helperText="teste"
          value={data.username}
          onChange={handleOnChange}
          type="text"
        />
        <TextField
          error={false}
          id="password"
          label="Senha"
          helperText="teste"
          value={data.password}
          onChange={handleOnChange}
          type="password"
        />
        <Button name={"Entrar"} execFunc={onSubmit} />
      </Box>
    </div>
  );
}

export default AuthPage;
