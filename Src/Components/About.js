import User from "./User";
import UserContext from "./UserStatus";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>Hi All, This is my page </h2>
      <div>
        
        <UserContext.Consumer>
          {(x)=>{
            return <h1>{x.loggedUser}</h1>
            
          }}
        </UserContext.Consumer>
      </div>
      <div>
        <User />
      </div>
    </div>
  );
};

export default About;
