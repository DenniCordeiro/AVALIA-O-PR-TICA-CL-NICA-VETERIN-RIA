const consultas = [
  {
    id: 1,
    data: '2026-04-01',
    tutorId: 1,
    animalId: 2,
    descricao: 'Consulta de pata quebrada',
  },
];

const listarTodasConsultas = async () => {
  return consultas;
};

const buscarConsultaPorId = async (id) => {
  const consulta = consultas.find((item) => item.id === Number(id));
  return consulta || null;
};

const criarConsulta = async ({ data, tutorId, animalId, descricao }) => {
  if (!data || !tutorId || !animalId || !descricao) {
    throw new Error('Data, tutorId, animalId e descricao são obrigatorios.');
  }

  const novaConsulta = {
    id: consultas.length + 1,
    data,
    tutorId,
    animalId,
    descricao,
  };

  consultas.push(novaConsulta);
  return novaConsulta;
};

const atualizarConsulta = async (id, { data, tutorId, animalId, descricao }) => {
  const index = consultas.findIndex((item) => item.id === Number(id));

  if (index === -1) {
    return null;
  }

  if (!data && !tutorId && !animalId && !descricao) {
    throw new Error('Informa um campo para atualizar.');
  }

  consultas[index] = {
    ...consultas[index],
    data: data ?? consultas[index].data,
    tutorId: tutorId ?? consultas[index].tutorId,
    animalId: animalId ?? consultas[index].animalId,
    descricao: descricao ?? consultas[index].descricao,
  };

  return consultas[index];
};

const removerConsulta = async (id) => {
  const index = consultas.findIndex((item) => item.id === Number(id));

  if (index === -1) {
    return false;
  }

  consultas.splice(index, 1);
  return true;
};

module.exports = {
  listarTodasConsultas,
  buscarConsultaPorId,
  criarConsulta,
  atualizarConsulta,
  removerConsulta,
};
