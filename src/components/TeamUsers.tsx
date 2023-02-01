import { ITeam } from "../types/Types";
import Employee from "./Employee";
interface IProps {
    team: ITeam[];
}
const TeamUsers: React.FC<IProps> = ({team}) => {
    

    const usersMapped = team.map(employee =>{
        const {id} = employee
        return <Employee key={id} {...employee}/>
    })
    return ( 
<>
{usersMapped}
</>
     );
}
 
export default TeamUsers;