import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const TokenUSDT: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-token-USDT"
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 0C31.0452 0 40 8.9548 40 20C40 31.0452 31.0448 40 20 40C8.9552 40 0 31.0476 0 20C0 8.9524 8.9536 0 20 0Z"
      fill="#53AE94"
    />
    <path
      d="M22.4684 17.3352V14.36H29.272V9.82678H10.7456V14.36H17.55V17.3328C12.02 17.5868 7.862 18.682 7.862 19.994C7.862 21.306 12.022 22.4012 17.55 22.6568V32.1868H22.47V22.656C27.99 22.4012 32.1396 21.3068 32.1396 19.996C32.1396 18.6852 27.99 17.5908 22.47 17.336L22.4684 17.3352ZM22.47 21.8488V21.8464C22.3312 21.8552 21.618 21.898 20.03 21.898C18.7604 21.898 17.8672 21.862 17.5524 21.8456V21.8496C12.6668 21.6332 9.02 20.7824 9.02 19.7644C9.02 18.7464 12.6672 17.8968 17.5524 17.68V21.002C17.8724 21.024 18.7876 21.078 20.0508 21.078C21.568 21.078 22.3308 21.0148 22.4708 21.002V17.68C27.3468 17.8972 30.9852 18.7488 30.9852 19.7632C30.9852 20.7776 27.3452 21.6296 22.4708 21.8468"
      fill="white"
    />
  </svg>
);

export default withLogo(TokenUSDT);
