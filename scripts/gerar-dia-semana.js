function gerarDiaSemana() {
  const diaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long" });
  const data = new Date().toLocaleDateString("pt-BR");
  const horario = new Date().toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
  });

  const dataCompleta = `${diaSemana} (${data}) às ${horario}`;

  return dataCompleta;
}

export default gerarDiaSemana;
