type MetaData = {
  TITLE: {
    text: string;
  };
};

/**
 * Definitions of sign-in page entities
 *
 */
export const META_DATA: MetaData = {
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
export const LOGO: ImageEntity = {
  id: "logo",
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
export const ID_INPUT: InputEntity = {
  id: "idInput",
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
export const PASSWORD_INPUT: InputEntity = {
  id: "passwordInput",
  placeholder: "password_input.enter",
  error_text: {
    no_password: "password_input.error.no_password",
    invalid_password: "password_input.error.invalid_password",
  },

  /**
   * Sign-in page - Password icon entity
   *
   */
  surfix: [
    {
      invisible: "/icon/eyes.invisible.svg",
      visible: "/icon/eyes.visible.svg",
      alt: "eyes",
    },
  ],
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
export const SIGN_IN_BUTTON: ButtonEntity = {
  id: "signinButton",
  text: "sign_in_button.text",
  href: "/", // TODO: temporary url
  color: "primary",
  variant: "contained",
  fullwidth: true,
  size: "L",
  mbsize: "M",
};

/**
 * Sign-in page - Find id link entity
 *
 */
export const FIND_ID_LINK: LinkEntity = {
  id: "",
  text: "find_id.text",
  href: "/", // TODO: temporary url
};

/**
 * Sign-in page - Find password link entity
 *
 */
export const FIND_PASSWORD_LINK: LinkEntity = {
  id: "",
  text: "find_password.text",
  href: "/", // TODO: temporary url
};

/**
 * Sign-in page - Sign-up link entity
 *
 */
export const SIGN_UP_LINK: LinkEntity = {
  id: "",
  text: "sign_up.text",
  href: "/", // TODO: temporary url
};

/**
 * Sign-in page - Terms-of-use link entity
 *
 */
export const TERMS_OF_USE_LINK: LinkEntity = {
  id: "",
  text: "terms_of_use.text",
  href: "/", // TODO: temporary url
};

/**
 * Sign-in page - Privacy policy link entity
 *
 */
export const PRIVACY_POLICY_LINK: LinkEntity = {
  id: "",
  text: "privacy_policy.text",
  href: "/", // TODO: temporary url
};

interface PageEntity {
  layout: string;
  metaData: MetaData;
  id: string;
  children: TemplateEntity[];
}

interface TemplateEntity {
  layout: string;
  id: string;
  children: OrganismEntiy[];
}

interface OrganismEntiy {
  layout: string;
  id: string;
  children: AtomEntity[];
}

interface AtomEntity {
  id: string;
}

interface OrganismLayoutEntity extends OrganismEntiy {
  children: OrganismEntiy[];
}
interface TemplateLayoutEntity extends TemplateEntity {
  children: TemplateEntity[];
}

/** 이미지 속성 */
export interface ImageEntity extends AtomEntity {
  /** 이미지의 소스 경로 */
  src: string;
  /** 이미지 설명 */
  alt: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 이미지 width 사이즈 default, sm, md, lg */
  width: { default: string; sm?: string; md?: string; lg?: string };
  /** 이미지 height 사이즈 default, sm, md, lg */
  height: { default: string; sm?: string; md?: string; lg?: string };
}

/** 버튼의 속성 */
export interface ButtonEntity extends AtomEntity {
  /** 버튼 기본(데스크탑) 사이즈 */
  size: "L" | "M" | "S";
  /** 버튼 모바일 사이즈 */
  mbsize?: "L" | "M" | "S";
  /** 버튼의 기본 컬러 */
  color: "primary" | "mono";
  /** 버튼의 형태 */
  variant: "contained" | "outline";
  /** 버튼 width full 사이즈 여부 */
  fullwidth?: boolean;
  /** 버튼 추가 스타일 */
  className?: object;
  text: string;
  href: string;
}

type Prefix = {};
type Surfix = {};

interface InputEntity extends AtomEntity {
  placeholder: string;
  prefix?: Prefix[];
  surfix?: Surfix[];
  error_text: Record<string, string>;
}

interface LinkEntity extends AtomEntity {
  text: string;
  href: string;
}

export const SignInEntity: PageEntity = {
  layout: "fullscreen-center",
  metaData: META_DATA,
  id: "signInPage",
  children: [
    {
      id: "cardBody",
      layout: "column",
      children: [
        {
          layout: "none",
          id: "logoWrap",
          children: [LOGO],
        },
        {
          id: "formBody",
          layout: "column",
          children: [
            {
              layout: "column",
              id: "inputBox",
              children: [ID_INPUT, PASSWORD_INPUT],
            },
            {
              layout: "none",
              id: "buttonWrap",
              children: [SIGN_IN_BUTTON],
            },
          ],
        } as OrganismLayoutEntity,
        {
          id: "formFooter",
          layout: "space-between",
          children: [
            {
              id: "left",
              layout: "center",
              children: [FIND_ID_LINK, FIND_PASSWORD_LINK],
            },
            {
              id: "left",
              layout: "center",
              children: [SIGN_UP_LINK],
            },
          ],
        } as OrganismLayoutEntity,
      ],
    },
    {
      id: "cardFooter",
      layout: "center",
      children: [
        {
          id: "_",
          layout: "none",
          children: [TERMS_OF_USE_LINK, PRIVACY_POLICY_LINK],
        },
      ],
    },
  ],
};
