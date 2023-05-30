const calculo = require('./media')

test('Testando a media aritmética', () => {

    expect(calculo.media(7, 4)).toBe(5.5)
})