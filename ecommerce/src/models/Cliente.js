import Endereco from './Endereco';

export default class Cliente extends Endereco {
  constructor(obj) {
    this.nome = obj.nome,
    this.cpf = obj.cpf,
    this.usuario = obj.usuario,
    this.email = obj.email,
    this.dataNascimento = obj.Date,
    this.endereco = obj.endereco

  }
}