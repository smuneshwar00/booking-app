import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have currentYear defined as users system current year", ()=>{
    const currentYear = new Date().getFullYear();
    expect(component.currentYear).toEqual(currentYear);
});
it("should have correct current year on UI", ()=>{
  const currentYear = new Date().getFullYear();
  const content = fixture.debugElement.query(By.css("[data-testid=current-year]")).nativeElement.innerHTML;
  const expected = `© ${currentYear} ABC Tech, Inc`
  expect(content).toEqual(expected);
});
});
