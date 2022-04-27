import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeAboutComponent } from './about.component';


describe('HomeAboutComponent', () => {
  let component: HomeAboutComponent;
  let fixture: ComponentFixture<HomeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});