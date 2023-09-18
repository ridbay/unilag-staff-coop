import React from 'react';

interface FaqItemProps {
    question?: string;
    answer?: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    return (
        <div className='border border-[#00000031] rounded-[3px] p-5'>
            <h1>What do we do?</h1>
            <p>We are a Cooperative Society registered under the Lagos State Ministry of Commerce and Cooperatives to engage in cooperative activities such as granting of Loans to qualified members of the Society.</p>
        </div>
    );
};

export default FaqItem;
