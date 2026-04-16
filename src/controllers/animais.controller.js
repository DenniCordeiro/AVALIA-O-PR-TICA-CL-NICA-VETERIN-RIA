const animaisService = require('../services/animais.service');

const listarAnimais = async (req, res) => {
  try {
    const animais = await animaisService.listarTodosAnimais();
    res.status(200).json({ total: animais.length, animais });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar animais.' });
  }
};

const buscarAnimaisPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await animaisService.buscarAnimalPorId(id);
    if (!animal) {
      return res.status(404).json({ erro: `Animal ${id} não encontrado.` });
    }

    res.status(200).json({ animal });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar animal.' });
  }
};

const criarAnimais = async (req, res) => {
  try {
    const { nome, especie } = req.body;
    const novoAnimal = await animaisService.criarAnimais({ nome, especie });

    res.status(201).json({
      mensagem: 'Animal cadastrado no acervo com sucesso!',
      animal: novoAnimal,
    });
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};

const atualizarAnimais = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, especie } = req.body;
    const animalAtualizado = await animaisService.atualizarAnimal(id, {
      nome,
      especie,
    });

    if (!animalAtualizado) {
      return res.status(404).json({ erro: `Animal ${id} não encontrado.` });
    }

    res.status(200).json({
      mensagem: 'Animal atualizado com sucesso!',
      animal: animalAtualizado,
    });
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};

const removerAnimais = async (req, res) => {
  try {
    const { id } = req.params;
    const removido = await animaisService.removerAnimal(id);

    if (!removido) {
      return res.status(404).json({ erro: `Animal ${id} não encontrado.` });
    }

    res.status(200).json({ mensagem: 'Animal removido com sucesso!' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao remover animal.' });
  }
};

module.exports = {
  listarAnimais,
  buscarAnimaisPorId,
  criarAnimais,
  atualizarAnimais,
  removerAnimais,
};
