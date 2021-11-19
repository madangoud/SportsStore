import { ComponentFixture, TestBed ,inject} from '@angular/core/testing';

import { EditorderComponent } from './editorder.component';

describe('EditorderComponent', () => {
  let component: EditorderComponent;
  let fixture: ComponentFixture<EditorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
