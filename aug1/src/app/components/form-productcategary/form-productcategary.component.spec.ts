import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductcategaryComponent } from './form-productcategary.component';

describe('FormProductcategaryComponent', () => {
  let component: FormProductcategaryComponent;
  let fixture: ComponentFixture<FormProductcategaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductcategaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProductcategaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
