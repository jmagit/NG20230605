import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FormularioComponent, PersonasDaoService } from './formulario.component';
import { NotificationService } from '../common-services';
import { LoggerService, MyCoreModule } from '@my/core';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioComponent],
      providers: [NotificationService, LoggerService, PersonasDaoService],
      imports: [FormsModule, HttpClientTestingModule, MyCoreModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('inflar los números', fakeAsync(() => {
    spyOn(window, 'alert').and.stub()
    component.add()
    component.send()
    tick()
    component.edit()
    tick()
    component.send()
    tick()
    component.cancel()
    expect(component).toBeTruthy();
  }));

});
