import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderComponent} from "./header";





describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

/*  it('goToLink function', () => {
    component.goToLink('https://www.movistar.com.ve/Particulares/home-particulares.html');
    spyOn(component, 'goToLink');
    expect(component.goToLink).toHaveBeenCalled();
  });*/
});
