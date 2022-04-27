import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglePaginatorComponent } from './toggle-paginator.component';

describe('TogglePaginatorComponent', () => {
  let component: TogglePaginatorComponent;
  let fixture: ComponentFixture<TogglePaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglePaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
