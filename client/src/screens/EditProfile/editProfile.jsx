import React from 'react';
import CreateProfileButton from '../../components/EditProfile/Button/CreateProfileButton'
import Form from '../../components/EditProfile/Form/form'

function EditProfile(props) {
  return (
    <div>
      <Form />
      <CreateProfileButton />
    </div>
  );
}

export default EditProfile;