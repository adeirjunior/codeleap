import { Career } from "../interfaces";

export enum ActionTypes {
  ADD_CAREER = "ADD_CAREER",
  DELETE_CAREER = "DELETE_CAREER",
}

export interface AddCareerAction {
  type: ActionTypes.ADD_CAREER;
  payload: Career;
}

export interface DeleteCareerAction {
  type: ActionTypes.DELETE_CAREER;
  payload: number;
}

export type Action = AddCareerAction | DeleteCareerAction;
