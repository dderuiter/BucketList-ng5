import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

    private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
    public goalsObs = this.goals.asObservable();

    constructor() { }

    changeGoal(goals) {
        this.goals.next(goals);
    }

}
