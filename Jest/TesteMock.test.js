const numeroAleatorioFake = 0.123456789
const gerarNumeroAleatorio = () => Math.random()
beforeEach(() => { //Executa antes do teste

// modificamos o comportamento do método random
// para que retorne numeroAleatorioFake
jest.spyOn(global.Math, 'random').mockReturnValue(numeroAleatorioFake)

})
test('Retorna um valor aleatório', () => {
// Vai passar o teste porque estamos controlando o comportamento de Math.random
console.log('NÚMERO FAKE: ', numeroAleatorioFake)
console.log('NÚMERO GERADO NO TESTE: ', gerarNumeroAleatorio())
expect(gerarNumeroAleatorio()).toBe(numeroAleatorioFake)

})
afterEach(() => { //Executa depois do teste

// eliminamos o comportamento fornecido anteriormente
jest.spyOn(global.Math, 'random').mockRestore()

})
console.log('NÚMERO GERADO DEPOIS DO TESTE: ', gerarNumeroAleatorio())