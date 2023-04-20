import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const TokenTEMP: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-token-TEMP"
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" fill="white" />
    <path
      d="M32 7.59846C32 6.82531 31.5892 6.10425 30.9263 5.71768L26.7686 3.28993C26.1057 2.90336 25.2842 2.90336 24.6213 3.28993L20.4636 5.71768C19.8021 6.10425 19.39 6.82531 19.39 7.59846V12.4526C19.39 12.6514 19.4198 12.846 19.4727 13.0324C19.2842 13.0804 19.0999 13.1544 18.9263 13.2559L14.7686 15.6836C14.1071 16.0702 13.695 16.7913 13.695 17.5644V22.4185C13.695 22.6242 13.7248 22.8243 13.779 23.0162C13.5892 23.0642 13.4049 23.1382 13.2314 23.2397L9.07366 25.6674C8.41211 26.054 8 26.7751 8 27.5482V32.4023C8 33.1755 8.41075 33.8965 9.07366 34.2831L13.2314 36.7095C13.5621 36.9028 13.9336 37.0001 14.305 37.0001C14.6765 37.0001 15.0479 36.9028 15.3787 36.7095L19.5364 34.2817C19.8048 34.1255 20.0312 33.9116 20.2074 33.6649C20.5084 33.6361 20.8039 33.5429 21.0737 33.3866L25.2314 30.9588C25.5011 30.8012 25.7275 30.5873 25.9038 30.3392C26.2047 30.3104 26.5002 30.2172 26.7686 30.0609L30.9263 27.6332C31.5879 27.2466 32 26.5256 32 25.7524V20.8983C32 20.583 31.9309 20.2787 31.8048 20.0004C31.9309 19.7221 32 19.4164 32 19.1025V14.2484C32 13.9345 31.9309 13.6301 31.8061 13.3518C31.9309 13.0736 32 12.7692 32 12.4553V7.59846Z"
      fill="#050A4A"
    />
    <path
      d="M14.9963 35.4142C14.9597 35.3937 14.9177 35.3525 14.9177 35.2758V30.8713C14.9177 30.5382 15.0953 30.227 15.3813 30.0598L19.154 27.8555C19.1825 27.839 19.2096 27.8321 19.2326 27.8321C19.2638 27.8321 19.2909 27.8431 19.3126 27.8555C19.3492 27.876 19.3912 27.9171 19.3912 27.9939V32.3998C19.3912 32.7342 19.2137 33.0441 18.9276 33.2113L15.1549 35.4142C15.0898 35.4526 15.0329 35.4348 14.9963 35.4142V35.4142ZM13.844 28.9905C14.1301 29.1577 14.4852 29.1577 14.7713 28.9905L18.544 26.7876C18.609 26.7492 18.6226 26.6916 18.6226 26.6491C18.6226 26.6066 18.609 26.549 18.544 26.5107L14.7713 24.3077C14.6289 24.2241 14.4676 24.183 14.3076 24.183C14.1477 24.183 13.9864 24.2241 13.844 24.3077L10.07 26.5107C10.0049 26.549 9.99133 26.6066 9.99133 26.6491C9.99133 26.6916 10.0049 26.7492 10.0713 26.7876L13.8454 28.9891L13.844 28.9905ZM20.8485 25.4291L24.6212 23.2261C24.9073 23.0589 25.0849 22.7477 25.0849 22.4146V18.0088C25.0849 17.932 25.0415 17.8909 25.0062 17.8703C24.9859 17.858 24.9588 17.847 24.9263 17.847C24.9019 17.847 24.8761 17.8539 24.8476 17.8703L21.0749 20.0746C20.7889 20.2418 20.6113 20.553 20.6113 20.8861V25.2906C20.6113 25.3674 20.6547 25.4085 20.6899 25.4291C20.7265 25.4496 20.7835 25.4675 20.8485 25.4291ZM20.4649 14.3226C20.3226 14.239 20.1612 14.1978 20.0013 14.1978C19.8413 14.1978 19.68 14.239 19.5376 14.3226L15.7636 16.5255C15.6985 16.5639 15.685 16.6215 15.685 16.664C15.685 16.7065 15.6985 16.764 15.7649 16.8024L19.539 19.004C19.825 19.1712 20.1802 19.1712 20.4663 19.004L24.239 16.801C24.304 16.7627 24.3176 16.7037 24.3176 16.6626C24.3176 16.6215 24.304 16.5625 24.239 16.5241L20.4663 14.3212L20.4649 14.3226ZM20.8458 32.09L24.6185 29.887C24.9046 29.7198 25.0822 29.4086 25.0822 29.0755V24.6696C25.0822 24.5929 25.0388 24.5517 25.0035 24.5312C24.9832 24.5188 24.9561 24.5079 24.9236 24.5079C24.8991 24.5079 24.8734 24.5147 24.8449 24.5312L21.0722 26.7355C20.7862 26.9027 20.6086 27.2139 20.6086 27.547V31.9515C20.6086 32.0283 20.652 32.0694 20.6872 32.09C20.7238 32.1105 20.7808 32.1283 20.8458 32.09V32.09ZM26.5422 15.4659L30.3149 13.2629C30.6009 13.0957 30.7785 12.7845 30.7785 12.4514V8.04554C30.7785 7.96877 30.7351 7.92764 30.6999 7.90708C30.6795 7.89474 30.6524 7.88378 30.6199 7.88378C30.5955 7.88378 30.5697 7.89063 30.5413 7.90708L26.7686 10.1114C26.4825 10.2786 26.3049 10.5898 26.3049 10.9229V15.3274C26.3049 15.4042 26.3483 15.4453 26.3836 15.4659C26.4188 15.4864 26.4757 15.5042 26.5422 15.4659V15.4659ZM26.1585 4.35936C26.0162 4.27574 25.8549 4.23462 25.6949 4.23462C25.5349 4.23462 25.3736 4.27574 25.2313 4.35936L21.4572 6.56229C21.3921 6.60068 21.3786 6.65962 21.3786 6.70075C21.3786 6.74187 21.3921 6.80082 21.4572 6.8392L25.2313 9.04076C25.5173 9.208 25.8725 9.208 26.1585 9.04076L29.9312 6.83783C29.9963 6.79945 30.0099 6.74187 30.0099 6.69938C30.0099 6.65688 29.9963 6.59931 29.9312 6.56092L26.1585 4.35799V4.35936ZM26.5395 22.1267L30.3122 19.9238C30.5982 19.7566 30.7758 19.4454 30.7758 19.1123V14.7064C30.7758 14.6296 30.7324 14.5885 30.6972 14.568C30.6768 14.5556 30.6497 14.5447 30.6172 14.5447C30.5928 14.5447 30.567 14.5501 30.5386 14.568L26.7658 16.7723C26.4798 16.9395 26.3022 17.2507 26.3022 17.5838V21.9883C26.3022 22.065 26.3456 22.1062 26.3808 22.1267C26.4161 22.1473 26.4744 22.1651 26.5395 22.1267V22.1267ZM26.5422 28.7671L30.3149 26.5641C30.6009 26.3969 30.7785 26.0857 30.7785 25.7526V21.3467C30.7785 21.27 30.7351 21.2288 30.6999 21.2083C30.6795 21.1959 30.6524 21.185 30.6212 21.185C30.5968 21.185 30.5697 21.1905 30.5426 21.2083L26.7699 23.4126C26.4839 23.5798 26.3063 23.891 26.3063 24.2241V28.6286C26.3063 28.7054 26.3497 28.7465 26.3849 28.7671C26.4202 28.7876 26.4771 28.8054 26.5435 28.7671H26.5422Z"
      fill="white"
    />
  </svg>
);

export default withLogo(TokenTEMP);
