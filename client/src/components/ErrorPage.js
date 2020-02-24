import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => {

    return (
        <div style={{margin:'20px', padding:'20px', textAlign:'center'}}>
            <span style={{display:'block', fontSize:'20px', margin:'15px'}}>Упс.. Кажется такой страницы не существует(</span>
            <Link to='/'>Перейти на главную</Link>
        </div>
    )
}

export default ErrorPage;