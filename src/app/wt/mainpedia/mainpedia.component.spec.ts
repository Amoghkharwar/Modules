import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpediaComponent } from './mainpedia.component';

describe('MainpediaComponent', () => {
  let component: MainpediaComponent;
  let fixture: ComponentFixture<MainpediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainpediaComponent]
    });
    fixture = TestBed.createComponent(MainpediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
