import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ButtonGoBack from '../../App/components/ButtonGoBack';



const SingelPage = () => {
    const {text,title} = useParams()

    return (
<div>
    <Link to='/'>Go Home</Link>
    <h2 className='title-post'>{text}</h2>

<br />

<p>{title}</p>

<img  src="https://picsum.photos/200/300" alt="photo"  />
    <ButtonGoBack />

</div>

        
    );
};

export default SingelPage;