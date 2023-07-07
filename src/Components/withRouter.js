import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const withRouter = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    const match = {params: useParams()};
    const params = useParams();
    return <Component {...props} navigate={navigate} params={params} match={match} />;
  };
};

export default withRouter