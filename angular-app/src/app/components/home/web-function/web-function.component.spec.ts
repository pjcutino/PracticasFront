import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFunctionComponent } from './web-function.component';

describe('WebFunctionComponent', () => {
  let component: WebFunctionComponent;
  let fixture: ComponentFixture<WebFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
