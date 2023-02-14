import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DataUpdateComponent} from "./data-update.component";
import {informatonPruebas} from "../../assets/information";




describe('DataUpdateComponent', () => {
  let component: DataUpdateComponent;
  let fixture: ComponentFixture<DataUpdateComponent>;
  let user = informatonPruebas;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataUpdateComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DataUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.user = user[2];
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
