import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoComponentsComponent } from './co-components.component';

describe('CoComponentsComponent', () => {
  let component: CoComponentsComponent;
  let fixture: ComponentFixture<CoComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
