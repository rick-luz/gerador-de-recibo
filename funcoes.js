function gerarRecibo() {
  document.getElementById('recibo_emitente').innerHTML =
    document.getElementById('emitente').value

  document.getElementById('recibo_nome').innerHTML =
    document.getElementById('nome').value

  document.getElementById('recibo_valor').innerHTML =
    document.getElementById('valor').value

  document.getElementById('recibo_servico').innerHTML =
    document.getElementById('servico').value

  document.getElementById('recibo_cnpj').innerHTML =
    document.getElementById('cnpj').value

  document.getElementById('recibo_data').innerHTML =
    document.getElementById('data').value
}
