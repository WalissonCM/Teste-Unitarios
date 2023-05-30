const {createTestScheduler} = require ('jest')


const calculo = require('./calculadora')

describe('funcões matemáticas', ()=>{
  
    test('Soma dois numeros', ()=>{

        expect(calculo.soma(10,20)).toBe(30)

        expect(calculo.soma(20,20)).toBe(40)

} )

} )