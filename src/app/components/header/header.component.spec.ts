import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the application name provided as prop', () => {
    
    const applicationName = "Testing Application";
    component.applicationName = applicationName;
    fixture.detectChanges();
    const content = (
      fixture.debugElement.query(By.css('[data-testid=app-name-text]'))
        .nativeElement as HTMLElement
    ).innerHTML;
    expect(content).toEqual(applicationName)
  });
});
