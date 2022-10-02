import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamTemplateComponent } from './param-template.component';

describe('ParamTemplateComponent', () => {
  let component: ParamTemplateComponent;
  let fixture: ComponentFixture<ParamTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
