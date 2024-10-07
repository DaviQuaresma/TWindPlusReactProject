import avatarImg from '/user.svg'

const Avatar = () => (
    <img
      className="rounded-full border-2 border-gray-400"
      width={48}
      height={48}
      src={avatarImg}
      alt="User"
    />
  )
  
  export default Avatar