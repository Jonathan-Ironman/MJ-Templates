import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendNamedTemplatesComponent } from './backend-named-templates.component';

describe('BackendNamedTemplatesComponent', () => {
  let component: BackendNamedTemplatesComponent;
  let fixture: ComponentFixture<BackendNamedTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendNamedTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendNamedTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
