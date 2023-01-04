import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DataUpdateModalComponent} from './data-update-modal.component';

describe('DataUpdateModalComponent', () => {
  let component: DataUpdateModalComponent;
  let fixture: ComponentFixture<DataUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataUpdateModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DataUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
