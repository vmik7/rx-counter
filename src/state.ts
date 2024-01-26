import { BehaviorSubject } from "rxjs";

/** Поток, содержащий значения громкости */
export const value$ = new BehaviorSubject<number>(50);