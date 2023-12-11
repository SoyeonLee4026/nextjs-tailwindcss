import { ButtonEntity, ImageEntity, LayoutEntity } from "../../components/components.entity";
import {
  FIND_ID_LINK,
  FIND_PASSWORD_LINK,
  ID_INPUT,
  LOGO,
  META_DATA,
  PASSWORD_INPUT,
  PRIVACY_POLICY_LINK,
  SIGN_IN_BUTTON,
  SIGN_UP_LINK,
  TERMS_OF_USE_LINK,
} from "./signIn.components.entity";

type SignInEntityType = {
  layout: LayoutEntity;
  metaData: {
    TITLE: {
      text: string;
    };
  };
  signInPage: [
    {
      layout: LayoutEntity;
      cardBody: [
        logo: ImageEntity,
        {
          layout: LayoutEntity;
          formBody: [
            {
              layout: LayoutEntity;
              inputBoxes: [
                idInput: {
                  placeholder: string;
                  error_text: Record<string, string>;
                },
                passwordInput: {
                  placeholder: string;
                  error_text: Record<string, string>;
                  PASSWORD_ICON: Record<string, string>;
                }
              ];
            },
            signInButton: {
              text: string;
              href: string;
              option: ButtonEntity;
            }
          ];
        },
        {
          layout: LayoutEntity;
          formFooter: [
            {
              layout: LayoutEntity;
              left: [findIdLink: Record<string, string>, findPasswordLink: Record<string, string>];
            },
            {
              layout: LayoutEntity;
              right: [signUpLink: Record<string, string>];
            }
          ];
        }
      ];
    },
    {
      layout: LayoutEntity;
      cardFooter: [termsOfUseLink: Record<string, string>, privacyPolicyLink: Record<string, string>];
    }
  ];
};

export const SignInEntity: SignInEntityType = {
  layout: "fullscreen-center",
  metaData: META_DATA,
  signInPage: [
    {
      layout: "center",
      id : "card-body",
      cardBody: [
        LOGO,
        {
          layout: "column",
          formBody: [
            {
              layout: "column",
              inputBoxes: [ID_INPUT, PASSWORD_INPUT],
            },
            SIGN_IN_BUTTON,
          ],
        },
        {
          layout: "space-between",
          formFooter: [
            {
              layout: "center",
              left: [FIND_ID_LINK, FIND_PASSWORD_LINK],
            },
            {
              layout: "center",
              right: [SIGN_UP_LINK],
            },
          ],
        },
      ],
    },
    {
      layout: "center",
      cardFooter: [TERMS_OF_USE_LINK, PRIVACY_POLICY_LINK],
    },
  ],
};
