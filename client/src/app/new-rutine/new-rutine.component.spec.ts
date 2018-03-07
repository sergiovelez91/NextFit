import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRutineComponent } from './new-rutine.component';

describe('NewRutineComponent', () => {
  let component: NewRutineComponent;
  let fixture: ComponentFixture<NewRutineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRutineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
