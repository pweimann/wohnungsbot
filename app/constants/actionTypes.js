// electron
export const SET_BROWSER_WINDOW = 'SET_BROWSER_WINDOW';
export const SET_BROWSER_VIEW_READY = 'SET_BROWSER_VIEW_READY';
export const SET_BROWSER_VIEW_URL = 'SET_BROWSER_VIEW_URL';
export const ELECTRON_ROUTING = 'ELECTRON_ROUTING';
export const INTERNAL_ADD_BROWSER_VIEW = 'INTERNAL_ADD_BROWSER_VIEW';
export const HIDE_CONFIGURATION = 'HIDE_CONFIGURATION';
export const SHOW_CONFIGURATION = 'SHOW_CONFIGURATION';
export const SET_INTERACTIVE_MODE = 'SET_INTERACTIVE_MODE';
export const PERFORM_SCROLL = 'PERFORM_SCROLL';
export const SHOW_DEV_TOOLS = 'SHOW_DEV_TOOLS';
export const OPEN_PDF = 'OPEN_PDF';
export const SET_AVAILABLE_VERSION = 'SET_AVAILABLE_VERSION';
export const SET_UPDATE_DOWNLOAD_PROGRESS = 'SET_UPDATE_DOWNLOAD_PROGRESS';

// configuration
export const SET_CONFIGURATION = 'SET_CONFIGURATION';
export const RESET_CONFIGURATION = 'RESET_CONFIGURATION';
export const NEXT_STAGE = 'NEXT_STAGE';
export const PREVIOUS_STAGE = 'PREVIOUS_STAGE';
export const SET_SEARCH_URL = 'SET_SEARCH_URL';
export const TOGGLE_POSTCODE = 'TOGGLE_POSTCODE';
export const RESET_POSTCODES = 'RESET_POSTCODES';
export const TOGGLE_FLOOR = 'TOGGLE_FLOOR';
export const TOGGLE_BOOLEAN = 'TOGGLE_BOOLEAN';
export const SET_NUMBER = 'SET_NUMBER';
export const SET_STRING = 'SET_STRING';

// overlay
export const CLICK_ANIMATION_SHOW = 'CLICK_ANIMATION_SHOW';
export const CLICK_ANIMATION_CLEAR = 'CLICK_ANIMATION_SHOW';
export const CALCULATE_OVERVIEW_BOUNDING_BOXES =
  'CALCULATE_OVERVIEW_BOUNDING_BOXES';
export const REFRESH_BOUNDING_BOXES = 'REFRESH_BOUNDING_BOXES';
export const CALCULATE_BOUNDING_BOX = 'CALCULATE_BOUNDING_BOX';
export const SET_BOUNDING_BOX = 'SET_BOUNDING_BOX';
export const SET_BOUNDING_BOX_GROUP = 'SET_BOUNDING_BOX_GROUP';
export const REMOVE_BOUNDING_BOXES_IN_GROUP = 'REMOVE_BOUNDING_BOXES_IN_GROUP';

// data
export const SET_OVERVIEW_DATA = 'SET_OVERVIEW_DATA';
export const SET_FLAT_DATA = 'SET_FLAT_DATA';
export const SET_VERDICT = 'SET_VERDICT';
export const REFRESH_VERDICTS = 'REFRESH_VERDICTS';

// bot
export const RETURN_TO_SEARCH_PAGE = 'RETURN_TO_SEARCH_PAGE';
export const SCROLL_WHILE_IDLE = 'SCROLL_WHILE_IDLE';
export const STOP_SCROLLING_WHILE_IDLE = 'STOP_SCROLLING_WHILE_IDLE';
export const RESET_BOT = 'RESET_BOT';

// bot / scheduler
export const QUEUE_INVESTIGATE_FLAT = 'QUEUE_INVESTIGATE_FLAT';
export const POP_FLAT_FROM_QUEUE = 'POP_FLAT_FROM_QUEUE';
export const LAUNCH_NEXT_TASK = 'LAUNCH_NEXT_TASK';
export const TASK_FINISHED = 'TASK_FINISHED';
export const NOOP = 'NOOP';

// bot
export const SET_BOT_IS_ACTING = 'SET_BOT_IS_ACTING';
export const SET_BOT_MESSAGE = 'SET_BOT_MESSAGE';
export const SET_SHOW_OVERLAY = 'SET_SHOW_OVERLAY';

// bot helpers
export const WILL_CLICK = 'WILL_CLICK';
export const WILL_PRESS_KEY = 'WILL_PRESS_KEY';
export const WILL_TYPE = 'WILL_TYPE';

// cache
export const SET_CACHE = 'SET_CACHE';
export const RESET_CACHE = 'RESET_CACHE';
export const MARK_COMPLETED = 'MARK_COMPLETED';

// helpers
export const SEND_MAIL = 'SEND_MAIL';
export const PRINT_TO_PDF = 'PRINT_TO_PDF';

// login
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
