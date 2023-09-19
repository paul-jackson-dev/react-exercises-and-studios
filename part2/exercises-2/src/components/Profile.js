import './styles.css';
import Button from './Button';
import oceans from'./oceans.json';



function Profile()
{
   let ListItems = oceans.map( (ocean) => (
      <h1 key={ocean.id}>{ocean.id}</h1>
   ));
   return(
      <> 
         <ListItems />
         <Button />
      </>  
   );
}

export default Profile;