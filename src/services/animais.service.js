const animais = [
  {
    id: 1,
    nome: 'rex',
    especie: 'gato',
    disponivel: true,
  },
  {
    id: 2,
    nome: 'lux',
    especie: 'gato',
    disponivel: false,
  },
  {
    id: 3,
    nome: 'anderson',
    especie: 'cachorro',
    disponivel: true,
  },
];

const listarTodosAnimais = async () => {
  return animais;
};

const buscarAnimalPorId = async (id) => {
  const animal = animais.find((item) => item.id === Number(id));
  return animal || null;
};

const criarAnimais = async ({ nome, especie }) => {
  if (!nome || !especie) {
    throw new Error('Nome e especie são obrigatorios.');
  }

  const novoAnimal = {
    id: animais.length + 1,
    nome,
    especie,
    disponivel: true,
  };

  animais.push(novoAnimal);
  return novoAnimal;
};

const atualizarAnimal = async (id, { nome, especie }) => {
  const index = animais.findIndex((item) => item.id === Number(id));

  if (index === -1) {
    return null;
  }

  if (!nome && !especie) {
    throw new Error('Nome ou espécie devem ser informados para atualizar.');
  }

  animais[index] = {
    ...animais[index],
    nome: nome ?? animais[index].nome,
    especie: especie ?? animais[index].especie,
  };

  return animais[index];
};

const removerAnimal = async (id) => {
  const index = animais.findIndex((item) => item.id === Number(id));

  if (index === -1) {
    return false;
  }

  animais.splice(index, 1);
  return true;
};

module.exports = {
  listarTodosAnimais,
  buscarAnimalPorId,
  criarAnimais,
  atualizarAnimal,
  removerAnimal,
};