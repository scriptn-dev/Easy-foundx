import http from "../config";

export default {
  save: (campaign) => {
    return http.post("campanhas", campaign, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
  listCampaigns: () => {
    return http.get("campanhas?publicado=true");
  },
  listCampaignsUser: (id) => {
    return http.get(`campanhas?pessoa_id=${id}`);
  },
  listCampaign: (id) => {
    return http.get(`campanhas/${id}`);
  },
  listColaborations: (id) => {
    return http.get(`campanhas/${id}/colaboracoes`);
  },
  saveColaboration: (colaboration, id) => {
    return http.post(`campanhas/${id}/colaboracoes`, colaboration);
  },
  makePayment: (id) => {
    return http.post(
      "pagamentos/novo",
      {
        colaboracao_id: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  },
  listCampaignByCategorie: (id) => {
    return http.get(`campanhas?categoria_id=${id}&publicado=true`);
  },
};
