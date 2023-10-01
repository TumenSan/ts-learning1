import styled from "styled-components";

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

// общий тип для пропов
const MenuItem = styled.li<{ isActive: boolean }>`
  background: ${(props: { isActive: any; }) => (props.isActive ? "red" : "gray")};
`;

const Container = styled.div`
  background-color: #9966ff;
  border-radius: 5px;
`

const Text = styled.p`
  font-size: 16px
`

function Profiles(props: ProfilesProps) {
  return (
    <div>
      <ul>
        <MenuItem isActive>Menu Item 1</MenuItem>
      </ul>
      <Container>
        <Text>Some text</Text>
      </Container>
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