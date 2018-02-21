import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoHistoryComponent } from './todo-history.component';

describe('TodoHistoryComponent', () => {
  let component: TodoHistoryComponent;
  let fixture: ComponentFixture<TodoHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
