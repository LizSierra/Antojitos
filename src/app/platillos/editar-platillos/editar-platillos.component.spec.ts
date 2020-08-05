import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlatillosComponent } from './editar-platillos.component';

describe('EditarPlatillosComponent', () => {
  let component: EditarPlatillosComponent;
  let fixture: ComponentFixture<EditarPlatillosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPlatillosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPlatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
