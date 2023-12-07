/**
 * Definitions of sign-in page entities
 *
 */
export const META_DATA = {
  /**
   * Sign-in page title
   *
   */
  TITLE: {
    text: "title",
  },
};

/**
 * Sign-in page - Logo entity
 *
 * @see {@link https://www.figma.com/file/tX8Hi6R4OhKl9LF9SIU9Bj/SarcoPros?type=design&node-id=180-22039&mode=dev}
 *
 */
export const LOGO = {
  src: "/logo/sarcofit.vertical.light.svg",
  alt: "sarcofit.vertical.light",
  width: { sm: "10rem", default: "11.25rem" },
  height: { sm: "6.35rem", default: "7.15rem" },
};

/**
 * Sign-in page - ID input label entity
 *
 */
export const ID_LABEL = {
  text: "id_label.text",
};

/**
 * Sign-in page - ID input entity
 *
 */
export const ID_INPUT = {
  placeholder: "id_input.placeholder",
  error_text: {
    no_email: "id_input.error.no_email",
    invalid_email: "id_input.error.invalid_email",
  },
};

/**
 * ID input form state definition
 *
 */
export interface IdInputState {
  error: IdInputErrorState;
}

type IdInputErrorState = null | keyof typeof ID_INPUT.error_text;

/**
 * Sign-in page - Password input label entity
 *
 */
export const PASSWORD_LABEL = {
  text: "password_label.text",
};

/**
 * Sign-in page - Password input entity
 *
 */
export const PASSWORD_INPUT = {
  placeholder: "password_input.enter",
  error_text: {
    no_password: "password_input.error.no_password",
    invalid_password: "password_input.error.invalid_password",
  },

  /**
   * Sign-in page - Password icon entity
   *
   */
  PASSWORD_ICON: {
    invisible: "/icon/eyes.invisible.svg",
    visible: "/icon/eyes.visible.svg",
    alt: "eyes",
  },
};

/**
 * Password input form state definition
 *
 */
export interface PasswordInputState {
  isVisible: boolean;
  error: PasswordInputErrorState;
}

type PasswordInputErrorState = null | keyof typeof PASSWORD_INPUT.error_text;

/**
 * Sign-in page - Sign-in button entity in form body
 *
 * @see {@link https://www.figma.com/file/tX8Hi6R4OhKl9LF9SIU9Bj/SarcoPros?type=design&node-id=75-2820&mode=dev}
 *
 */
export const SIGN_IN_BUTTON = {
  text: "sign_in_button.text",
  href: "/", // TODO: temporary url
  className: { color: "primary", variant: "contained", fullwidth: true, size: "L", mbsize: "M" } as const,
};

/**
 * Sign-in page - Find id link entity
 *
 */
export const FIND_ID_LINK = {
  text: "find_id.text",
  href: "/", // TODO: temporary url
};

/**
 * Sign-in page - Find password link entity
 *
 */
export const FIND_PASSWORD_LINK = {
  text: "find_password.text",
  href: "/", // TODO: temporary url
};

/**
 * Sign-in page - Sign-up link entity
 *
 */
export const SIGN_UP_LINK = {
  text: "sign_up.text",
  href: "/", // TODO: temporary url
};

/**
 * Sign-in page - Terms-of-use link entity
 *
 */
export const TERMS_OF_USE_LINK = {
  text: "terms_of_use.text",
  href: "/", // TODO: temporary url
};

/**
 * Sign-in page - Privacy policy link entity
 *
 */
export const PRIVACY_POLICY_LINK = {
  text: "privacy_policy.text",
  href: "/", // TODO: temporary url
};
