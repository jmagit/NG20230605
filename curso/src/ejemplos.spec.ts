class Calculadora {
  suma(a: number, b: number) { return a + b }
  divide(a: number, b: number) {
    if (b === 0)
      throw new Error('División por 0')
    return a / b
  }
  saluda(msg: string) {
    console.log(msg)
  }
}

describe('Demos de pruebas', () => {
  let calc: Calculadora;
  beforeEach(() => {
    calc = new Calculadora()
  })
  describe('Método suma', () => {
    describe('OK', () => {
      [
        { a: 1, b: 2, result: 3 },
        { a: 1, b: -2, result: -1 },
        // {a: 0.1, b: 0.2, result: 0.3},
        { a: 0, b: 0, result: 0 },
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
        expect(calc.divide(9, 3)).toBe(3)
      })
    })
    describe('KO', () => {
      it('Divide por 0', () => {
        // try {
        // calc.divide(9,0)
        //   fail('no hay excepción')
        // } catch {}

        expect(() => calc.divide(9, 0)).toThrow()
      })

    })
    it('Esta prueba esta pendiente')

  })
  describe('Dobles de pruebas', () => {
    beforeEach(function () {
      jasmine.clock().install();
      jasmine.clock().mockDate(new Date(2022,2,22))
    });
    afterEach(function () { jasmine.clock().uninstall(); });

    it('Asincrona', done => {
      setTimeout(() => {
        expect(false).toBeFalsy()
        done()
      }, 1000);
      expect((new Date()).toUTCString()).toBe('Mon, 21 Mar 2022 23:00:00 GMT')
      jasmine.clock().tick(1000)
    }, 500)
    it('Mock calculadora', () => {
      const mock = spyOn(calc, 'suma').and.returnValue(3)
      expect(calc.suma(2, 2)).toBe(3)
      expect(calc.suma(12, 22)).toBe(3)
    })
  })
  describe('Método saluda', () => {
    describe('OK', () => {
      it('Mock console', () => {
        const mock = spyOn(console, 'log').and.stub()
        const msg = 'Hola mundo'
        calc.saluda(msg)
        expect(mock).toHaveBeenCalled()
        expect(mock).toHaveBeenCalledWith(msg)
      })
    })
    // describe('KO', () => {

    // })

  })
})
