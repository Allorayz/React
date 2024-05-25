import React from 'react';
import moment from 'moment';
import './index.scss';

const Profile = props => {
  const date = moment(props.user.birthDate).format('DD MMM YY');
  return (
    <div className={'profile'}>
      <p className={'profile__name'}>
        {`${props.user.firstName} ${props.user.lastName}`}
      </p>
      <p
        className={'profile__birth'}
      >{`Was born ${date} in ${props.user.birthPlace}`}</p>
    </div>
  );
};
export default Profile;
