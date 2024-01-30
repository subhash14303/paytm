import React from 'react';
import { Appbar } from './Appbar';
import { Balance } from './Balance';
import { Users } from './Users';
import { SendMoney } from './sendMoney';
const Dashboard = () => {
    return (
    <div>
        <div>
            <Appbar/>
        </div>
        <div className="m-8">
            <Balance value={"10,000"} />
            <Users />
        </div>
        

    </div>
        
        
    );
}

export default Dashboard;
