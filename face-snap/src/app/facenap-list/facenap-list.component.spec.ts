import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacenapListComponent } from './facenap-list.component';

describe('FacenapListComponent', () => {
  let component: FacenapListComponent;
  let fixture: ComponentFixture<FacenapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacenapListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacenapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
