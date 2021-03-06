enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

enum TokenReason {
  REFRESH_TOKEN = 'refresh-token',
  VERIFY_EMAIL = 'verify-email',
  FORGOT_PASSWORD = 'forgot-password',
  RESET_PASSWORD = 'reset-password',
}

enum ImageType {
  JPEG = 'jpeg',
  PNG = 'png',
}

enum Country {
  NG = 'nigeria',
  GH = 'ghana',
  ZA = 'south africa',
}

const emailTemplate = (
  emailName: string,
  recipient: string,
  token?: string,
) => {
  switch (emailName) {
    case 'registerEmail':
      return {
        msgTo: recipient,
        template: '3624',
      };
    case 'verificationEmail':
      return {
        msgTo: recipient,
        template: '3048',
        token,
      };
    case 'forgotPassword':
      return {
        msgTo: recipient,
        template: 3698,
      };
    case 'referralRegistered':
      return {
        msgTo: recipient,
        template: '3779',
      };
    case 'resetPassword':
      return {
        msgTo: recipient,
        template: 3731,
      };
    default:
      return '';
  }
};

export { Status, TokenReason, ImageType, Country, emailTemplate };
