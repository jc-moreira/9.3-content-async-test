require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Verifica o nome do super-heroi', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
  });
  it('Verifica o erro ao executar a função sem parametros', async () => {
    const fail = await fetchCharacter();
    expect(fail).toEqual(new Error('You must provide an url'));
  });
  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('parâmetro qualquer');
    expect(response).toBe('Invalid id');
  });
  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});