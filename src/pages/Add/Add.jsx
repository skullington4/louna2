import AddItemForm from '../../components/AddItemForm/AddItemForm';
import AddCollectionForm from '../../components/AddCollectionForm/AddCollectionForm';

export default function Add({user}) {


    return (
      <>
      
        <h2>This is the Add page</h2>
        {user && (
        <>
          <h2>Add an Item</h2>
          <AddItemForm />
          <h2>Add a Collection</h2>
          <AddCollectionForm />
        </>
      )}

      </>
    );
  }