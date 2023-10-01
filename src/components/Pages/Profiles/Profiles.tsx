
interface ProfileType {
  name: string
  age: number | null
}

interface ProfilesProps {
  //Property 'map' does not exist on type 'ProfilesProps'.
  //map(arg0: (Profile: any, i: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  //[x: string]: any;
  //map: any;
  //render: (profile: ProfileType, index: number) => JSX.Element;
  profiles: Array<ProfileType>
}

function Profiles(props: ProfilesProps) {
  return (
    <div>
      {props.profiles.map((profile, i) => (
        <div key={i}>
          <p>{profile.name}</p>
          <p>{profile.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Profiles;