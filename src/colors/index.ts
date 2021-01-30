export {red} from './red';
export {pink} from './pink';
export {purple} from './purple';
export {deepPurple} from './deep-purple';
export {indigo} from './indigo';
export {blue} from './blue';
export {lightBlue} from './light-blue';
export {cyan} from './cyan';
export {teal} from './teal';
export {green} from './green';
export {lightGreen} from './light-green';
export {lime} from './lime';
export {yellow} from './yellow';
export {amber} from './amber';
export {orange} from './orange';
export {deepOrange} from './deep-orange';
export {brown} from './brown';
export {blueGrey} from './blue-grey';
export {grey} from './grey';

export type Color = {
  base: string;
  lighten: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
  darken: {
    1: string;
    2: string;
    3: string;
    4: string;
  };
};
export type AccentedColor = Color & {
  accent: {
    1: string;
    2: string;
    3: string;
    4: string;
  };
};
