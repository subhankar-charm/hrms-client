import {
  Avatar as AvatarUI,
  AvatarFallback,
  AvatarImage
} from './AvatarElements';

const Avatar = () => {
  return (
    <AvatarUI>
      <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarUI>
  );
};

export default Avatar;
