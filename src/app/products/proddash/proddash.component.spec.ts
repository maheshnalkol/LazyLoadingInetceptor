import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProddashComponent } from './proddash.component';

describe('ProddashComponent', () => {
  let component: ProddashComponent;
  let fixture: ComponentFixture<ProddashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProddashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProddashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
