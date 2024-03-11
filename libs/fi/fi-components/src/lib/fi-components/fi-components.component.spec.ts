import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiComponentsComponent } from './fi-components.component';

describe('FiComponentsComponent', () => {
  let component: FiComponentsComponent;
  let fixture: ComponentFixture<FiComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
