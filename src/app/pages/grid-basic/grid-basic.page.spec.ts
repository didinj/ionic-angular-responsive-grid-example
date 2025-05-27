import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridBasicPage } from './grid-basic.page';

describe('GridBasicPage', () => {
  let component: GridBasicPage;
  let fixture: ComponentFixture<GridBasicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
