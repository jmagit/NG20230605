import { FormControl } from '@angular/forms';
import { NifValidator, NifValidatorDirective, UppercaseValidator, UppercaseValidatorDirective } from './mis-validadores.directive'

describe('NifValidator', () => {
  const esNIF = NifValidator()
  const control = new FormControl('input');

  describe('NIF OK', () => {
      ['12345678z', '12345678Z', '1234S', '4g', null].forEach(caso => {
          it(`NIF: ${caso}`, () => {
            control.setValue(caso);
            expect(esNIF(control)).toBeNull()
          })
      })
  });

  describe('NIF KO', () => {
      ['1234J', '12345678', 'Z', 'Z12345678'].forEach(caso => {
        it(`NIF: ${caso}`, () => {
          control.setValue(caso);
          expect(esNIF(control)).not.toBeNull()
        })
      })
  });
  it('NIFValidatorDirective', () => {
    const directive = new NifValidatorDirective();
    control.setValue(null);
    expect(directive.validate(control)).toBeNull();
  })
});

describe('UppercaseValidator', () => {
  const esUppercase = UppercaseValidator()
  const control = new FormControl('input');
  describe('Uppercase OK', () => {
      ['12345678', 'CASA', null].forEach(caso => {
          it(`Uppercase: ${caso}`, () => {
            control.setValue(caso);
            expect(esUppercase(control)).toBeNull()
          })
      })
  });

  describe('Uppercase KO', () => {
      ['Algo', '12345678z', 'casa'].forEach(caso => {
        it(`Uppercase: ${caso}`, () => {
          control.setValue(caso);
          expect(esUppercase(control)).not.toBeNull()
        })
      })
  });

  it('UppercaseValidatorDirective', () => {
    const directive = new UppercaseValidatorDirective();
    control.setValue(null);
    expect(directive.validate(control)).toBeNull();
  })
});



