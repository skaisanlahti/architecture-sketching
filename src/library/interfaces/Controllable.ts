import { Startable } from "../Startable";
import { Stoppable } from "../Stoppable";

export type Controllable = Startable & Stoppable;
