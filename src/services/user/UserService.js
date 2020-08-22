import http from "../config";
import swal from "sweetalert";

export default {
  save: (user) => {
    return http
      .post("pessoas", user, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          swal(
            "Confirme seu cadastro",
            "Verifique sua caixa de entrada para confirmar seu cadastro.",
            "info"
          );
        } else {
          swal(
            "Confirme seu cadastro",
            "Você ainda não ativou seu cadastro, verifique sua caixa de entrada.",
            "warning"
          );
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          swal("Ops!", "Esse e-mail já existe", "error");
        } else {
          swal("Ops!", "Desculpe, houve algum erro no seu cadastro.", "error");
        }
      });
  },
  confirmation: (hash) => {
    return http.get(`pessoas/ativar/${hash}`, {});
  },
};
