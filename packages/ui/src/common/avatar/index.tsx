import { Avatar as AvatarUI, AvatarFallback, AvatarImage } from './Avatar';

const Avatar = () => {
  return (
    <AvatarUI>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarUI>
  );
};

export default Avatar;
