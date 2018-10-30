import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.models';

export const ADD_TUTORIAL = '[TUTORIAL] add';
export const REMOVE_TUTORIAL = '[TUTRIAL] remove';


export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL;
    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL;
    constructor(public payload: number) {}
}

export type Actions = AddTutorial | RemoveTutorial;
