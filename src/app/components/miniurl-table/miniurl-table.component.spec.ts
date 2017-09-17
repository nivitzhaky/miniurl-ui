import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniurlTableComponent } from './miniurl-table.component';

describe('MiniurlTableComponent', () => {
  let component: MiniurlTableComponent;
  let fixture: ComponentFixture<MiniurlTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniurlTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniurlTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
