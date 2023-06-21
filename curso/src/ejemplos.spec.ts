class Calculadora {
  suma(a: number, b: number) { return a + b }
  divide(a: number, b: number) {
    if(b === 0)
      throw new Error('División por 0')
    return a / b
  }
  saluda(msg: string) {
    console.log(msg)
  }
}

fdescribe('Demos de pruebas', () => {
  let calc: Calculadora;
  beforeEach(() => {
    calc = new Calculadora()
  })
  describe('Método suma', () => {
    describe('OK', () => {
      [
        {a: 1, b: 2, result: 3},
        {a: 1, b: -2, result: -1},
        // {a: 0.1, b: 0.2, result: 0.3},
        {a: 0, b: 0, result: 0},
      ].forEach(param => {
        it(`Suma: ${param.a} + ${param.b} = ${param.result}`, () => {
          expect(calc.suma(param.a, param.b)).toBe(param.result)
        })
      });
      it('Suma dos valores', () => {
        const c = new Calculadora();

        const result = c.suma(1, 2);

        expect(result).toBe(3)
      })
      xit('Suma valores', () => {
         expect(calc.suma(1, 2)).withContext('p con p').toBe(-3)
         expect(calc.suma(1, -0.9)).withContext('p con n').toBe(0.1)
         expect(calc.suma(-1, -2)).withContext('n con n').toBe(-3)

      });

    })
    describe('KO', () => {
      it('Suma dos valores', () => {
        const c = new Calculadora();

        const result = c.suma(0.1, 0.2);

        expect(result).toBeCloseTo(0.3, 15)
      })

    })
    it('Esta prueba esta pendiente')

  })
  describe('Método Divide', () => {
    describe('OK', () => {
      it('Divide dos valores', () => {
        expect(calc.divide(9,3)).toBe(3)
      })
    })
    describe('KO', () => {
      it('Divide por 0', () => {
        // try {
          // calc.divide(9,0)
        //   fail('no hay excepción')
        // } catch {}

         expect(() => calc.divide(9,0)).toThrow()
      })

    })
    it('Esta prueba esta pendiente')

  })
  it('Asincrona', done => {
    setTimeout(() => {
     expect(true).toBeFalsy()
     done()
    }, 1000);
  })
  // describe('Método saluda', () => {
  //   describe('OK', () => {

  //   })
  //   describe('KO', () => {

  //   })

  // })
})
