import React from 'react';
import moment from 'moment';
import './index.scss';

const Profile = props => {
  const date = moment(props.userData.birthDate).format('DD MMM YY');
  return (
    <div className={'profile'}>
      <p className={'profile__name'}>
        {`${props.userData.firstName} ${props.userData.lastName}`}
      </p>
      <p
        className={'profile__birth'}
      >{`Was born ${date} in ${props.userData.birthPlace}`}</p>
    </div>
  );
};
export default Profile;
