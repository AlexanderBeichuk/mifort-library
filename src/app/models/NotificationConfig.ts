import {SnotifyPosition} from 'ng-snotify';

const STYLE = 'material';
const TIMEOUT = 3000;
const POSITION: SnotifyPosition = SnotifyPosition.rightTop;
const IS_PROGRESS_BAR = false;
const IS_CLOSE_CLICK = true;
const IS_NEW_TOP = true;
const BACKDROP = -1;
const DOCK_MAX = 8;
const BLOCK_MAX = 6;
const IS_PAUSE_HOVER = true;
const TITLE_MAX_LENGTH = 500;
const BODY_MAX_LENGTH = 1000;
const ANIMATION_ENTER = 'animation';
const ANIMATION_EXIT = 'animation';
const ANIMATION_TIME = 3000;

export class NotificationAnimation {
  constructor(
    public enter: string = ANIMATION_ENTER,
    public exit: string = ANIMATION_EXIT,
    public time: number = ANIMATION_TIME
  ) { }
}

export class NotificationConfig {
  constructor(
    public icon: string = null,
    public style: string = STYLE,
    public timeout: number = TIMEOUT,
    public position: SnotifyPosition = POSITION,
    public isProgressBar: boolean = IS_PROGRESS_BAR,
    public isCloseClick: boolean = IS_CLOSE_CLICK,
    public isNewTop: boolean = IS_NEW_TOP,
    public backdrop: number = BACKDROP,
    public dockMax: number = DOCK_MAX,
    public blockMax: number = BLOCK_MAX,
    public isPauseHover: boolean = IS_PAUSE_HOVER,
    public titleMaxLength: number = TITLE_MAX_LENGTH,
    public bodyMaxLength: number = BODY_MAX_LENGTH,
    public animation: NotificationAnimation = new NotificationAnimation()
  ) { }
}

export enum NotificationStatus {
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
  Info = 'info',
  Simple = 'simple'
}
