import Link from 'next/link';
import React from 'react';


export const metadata = {
    title: 'DashBoard || Dashboard ',
    description: 'Generated by create next app',
  }
  

const Dashboard = () => {
    return (
        <div>
            hi i am Dashboard
            <a className="py-3 px-4 border-2" href="/Dashboard/me">me</a>
            

        </div>
    );
};

export default Dashboard;