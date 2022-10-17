import React from 'react';

interface FromTo {
  from: any;
  to: any;
}

type Changes = Record<string, FromTo>;

type GenericProps = Record<string, any>;

const useWhyDidYouUpdate = (name: string, props: GenericProps): void =>{
  const previousProps = React.useRef<GenericProps>(props);

  React.useEffect(() => {
    if (previousProps && previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props });
   
      const changes: Changes = {};

      allKeys.forEach((key) => {
     
        if (previousProps.current[key] !== props[key]) {
     
          changes[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }
      });

      if (Object.keys(changes).length) {
        console.log('[why-did-you-update]', name, changes);
      }
    }

    previousProps.current = props;
  });
}

export  {useWhyDidYouUpdate};