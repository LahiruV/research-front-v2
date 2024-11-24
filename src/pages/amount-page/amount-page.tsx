
import { AmountComponent } from '@zenra/components';
import React from 'react';

const Amount: React.FC = () => {
    const [date, setDate] = React.useState<string | number>('');

    const onClick = () => {
        console.log('Clicked');
    };

    return (
        <AmountComponent onClick={onClick} date={date} setDate={setDate} />
    );
};

export default Amount;
