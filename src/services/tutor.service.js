const tutores = [
  { id: 1, nome: 'Anderson Dutra', email: 'anderson@gmail.com' },
  { id: 2, nome: 'Ralph Dutra', email: 'ralph@gmail.com' },
  { id: 3, nome: 'Teddy Dutra', email: 'teddy@gmail.com' },
];

const listarTodosTutor = async () => {
  return tutores;
};

const buscarTutorPorId = async (id) => {
  const tutor = tutores.find((item) => item.id === Number(id));
  return tutor || null;
};

const criarTutor = async ({ nome, email }) => {
  if (!nome || !email) {
    throw new Error('Nome e email são obrigatorios.');
  }

  const novoTutor = {
    id: tutores.length + 1,
    nome,
    email,
  };

  tutores.push(novoTutor);
  return novoTutor;
};

const atualizarTutor = async (id, { nome, email }) => {
  const index = tutores.findIndex((item) => item.id === Number(id));

  if (index === -1) {
    return null;
  }

  if (!nome && !email) {
    throw new Error('Nome ou email devem ser informados para atualizar.');
  }

  tutores[index] = {
    ...tutores[index],
    nome: nome ?? tutores[index].nome,
    email: email ?? tutores[index].email,
  };

  return tutores[index];
};

const removerTutor = async (id) => {
  const index = tutores.findIndex((item) => item.id === Number(id));

  if (index === -1) {
    return false;
  }

  tutores.splice(index, 1);
  return true;
};

module.exports = {
  listarTodosTutor,
  buscarTutorPorId,
  criarTutor,
  atualizarTutor,
  removerTutor,
};