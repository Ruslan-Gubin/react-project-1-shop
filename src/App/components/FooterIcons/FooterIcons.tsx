import React from 'react';
import styles from './FooterIcons.module.scss';

const FooterIcons: React.FC = React.memo(() => {
    return (
        <ul className={styles.icons}>
           <li> <a href="https://instagramishe.ru/" target='_blank'><img src="https://i.ibb.co/FzW19Hc/1491579542-yumminkysocialmedia22-83078.png" alt="tvit" /></a></li>
           <li> <a href="https://vk.com/" target='_blank'><img src="https://i.ibb.co/sQSNZqM/linkedin-icon-icons-com-65929.png" alt="inst" /></a></li>
           <li> <a href="http://www.facebook.com.vn/" target='_blank'><img src="https://i.ibb.co/6WtXw0d/vk-icon-icons-com-71991.png" alt="vk" /></a></li>
           <li> <a href="https://investor.twitterinc.com/home/default.aspx" target='_blank'><img src="https://i.ibb.co/Yyb7SgG/1491580635-yumminkysocialmedia26-83102.webp" alt="fb" /></a></li>
            </ul>
    );
});

export  {FooterIcons};


 