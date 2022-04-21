import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAPIComponent } from './request-api.component';

describe('RequestAPIComponent', () => {
  let component: RequestAPIComponent;
  let fixture: ComponentFixture<RequestAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
