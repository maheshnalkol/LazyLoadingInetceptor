import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategroyComponent } from './categroy.component';

describe('CategroyComponent', () => {
  let component: CategroyComponent;
  let fixture: ComponentFixture<CategroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategroyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
