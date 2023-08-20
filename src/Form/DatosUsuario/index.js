import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = ({updateStep}) => {

  const [email, setEmail] = useState({ value: "", valid: null});
  const [password, setPassword] = useState({ value: "", valid: null});

// class DatosUsuario extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: {
  //       value: '',
  //       valid: true
  //     },
  //     password: {
  //       value: '',
  //       valid: true
  //     }
  //   }
  // }

  // render() {
    return (
      <Box
        component="form"
        autoComplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          if(email.valid && password.valid){
            console.log("Siguiente formulario");
            console.log(email, password);
            updateStep(1)
          } else {
            console.log("No hacer nada")
          }
          
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={email.valid == false}
          helperText={email.valid == false && "Ingresa un correo electrónico válido"}
          // value={ this.state.email.value }
          value={ email.value }
          onChange={ (input) => { 
            //  this.setState({ email: { value: input.target.value}})
               const email = input.target.value
               const valido = validarEmail(email);
                setEmail({value: email, valid: valido});
              }}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          error={password.valid == false}
          helperText={password.valid == false && "Ingresa una contraseña válida, al menos 8 caracteres y maximo 20."}
          margin="dense"
          type="password"
          // value={ this.state.password.value }
          value={ password.value }
          onChange={ (input) =>
            // this.setState({ password: { value: input.target.value}})
             {  const password = input.target.value
                setPassword({value: password, valid: validarPassword(password)}) }
          }
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
  }
// }

export default DatosUsuario;
