import _ from 'lodash';
import { v4 } from 'uuid';

export namespace M4Player {
  export type PlayerData = {
    id: string;
    name: string;
  };

  export function publishPlayer() {
    return {
      id: v4(),
      name: "",
    };
  }
}
