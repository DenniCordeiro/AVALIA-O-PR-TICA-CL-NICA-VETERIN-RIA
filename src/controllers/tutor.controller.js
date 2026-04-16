const tutorService = require('../services/tutor.service');

const listarTutor = async (req, res) => {
  try {
    const tutor = await tutorService.listarTodosTutor();
    res.status(200).json({ total: tutor.length, tutor });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar tutor.' });
  }
};

const buscarTutorPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const tutor = await tutorService.buscarTutorPorId(id);

    if (!tutor) {
      return res.status(404).json({ erro: `Tutor ${id} não encontrado.` });
    }

    res.status(200).json({ tutor });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar tutor.' });
  }
};

const criarTutor = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const novoTutor = await tutorService.criarTutor({ nome, email });

    res.status(201).json({
      mensagem: 'Tutor cadastrado com sucesso!',
      tutor: novoTutor,
    });
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};

const atualizarTutor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;
    const tutorAtualizado = await tutorService.atualizarTutor(id, {
      nome,
      email,
    });

    if (!tutorAtualizado) {
      return res.status(404).json({ erro: `Tutor ${id} não encontrado.` });
    }

    res.status(200).json({
      mensagem: 'Tutor atualizado com sucesso!',
      tutor: tutorAtualizado,
    });
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};

const removerTutor = async (req, res) => {
  try {
    const { id } = req.params;
    const removido = await tutorService.removerTutor(id);

    if (!removido) {
      return res.status(404).json({ erro: `Tutor ${id} não encontrado.` });
    }

    res.status(200).json({ mensagem: 'Tutor removido com sucesso!' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao remover tutor.' });
  }
};

module.exports = {
  listarTutor,
  buscarTutorPorId,
  criarTutor,
  atualizarTutor,
  removerTutor,
};
