const consultasService = require('../services/consultas.service');

const listarConsultas = async (req, res) => {
  try {
    const consultas = await consultasService.listarTodasConsultas();
    res.status(200).json({ total: consultas.length, consultas });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar consultas.' });
  }
};

const buscarConsultaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const consulta = await consultasService.buscarConsultaPorId(id);

    if (!consulta) {
      return res.status(404).json({ erro: `Consulta ${id} não encontrada.` });
    }

    res.status(200).json({ consulta });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar consulta.' });
  }
};

const criarConsulta = async (req, res) => {
  try {
    const { data, tutorId, animalId, descricao } = req.body;
    const novaConsulta = await consultasService.criarConsulta({
      data,
      tutorId,
      animalId,
      descricao,
    });

    res.status(201).json({
      mensagem: 'Consulta cadastrada com sucesso!',
      consulta: novaConsulta,
    });
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};

const atualizarConsulta = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, tutorId, animalId, descricao } = req.body;
    const consultaAtualizada = await consultasService.atualizarConsulta(id, {
      data,
      tutorId,
      animalId,
      descricao,
    });

    if (!consultaAtualizada) {
      return res.status(404).json({ erro: `Consulta ${id} não encontrada.` });
    }

    res.status(200).json({
      mensagem: 'Consulta atualizada com sucesso!',
      consulta: consultaAtualizada,
    });
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};

const removerConsulta = async (req, res) => {
  try {
    const { id } = req.params;
    const removido = await consultasService.removerConsulta(id);

    if (!removido) {
      return res.status(404).json({ erro: `Consulta ${id} não encontrada.` });
    }

    res.status(200).json({ mensagem: 'Consulta removida com sucesso!' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao remover consulta.' });
  }
};

module.exports = {
  listarConsultas,
  buscarConsultaPorId,
  criarConsulta,
  atualizarConsulta,
  removerConsulta,
};
