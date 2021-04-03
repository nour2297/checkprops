import React from 'react'
import { PropTypes } from 'prop-types';

const Profile = ({ fullName, bio, profession, children, handleclick }) => {

    return ( <
        div >
        <
        h1 > { fullName } < /h1>   <
        h1 > { bio } < /h1>   <
        h1 > { profession } < /h1>   { children }   <
        button onClick = {
            () => handleclick(fullName)
        } > < /button>  

        <
        / div >
    )
}
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.number

};
//Profile.defaultProps = {
//   fullName: "kmar",
//  bio: "",
// profession: "student"

//};

export default Profile