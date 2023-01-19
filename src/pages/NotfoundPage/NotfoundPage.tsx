import React from "react";
import { NotFoundBlock } from "components";


const NotfoundPage = React.memo(() => {
    return (
        <div data-testid='not-found-page'>
            not
            <NotFoundBlock />
        </div>
    );
});

export  {NotfoundPage};