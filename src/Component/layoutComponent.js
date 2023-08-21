// Layout.js
import React from 'react';
import Header from './HeaderComponent';
import Sidebar from './SidebarComponent';
import ApplyleaveComponent from './ApplyleaveComponent';

const LayoutComponent = (props ) => {
  const { loginType, children } = props;

  return (
    <div>
      <Header />
      <Sidebar loginType={loginType}/>
      <Applyleave leaveType={leaveType}/>
      {children}
    </div>
  );
};

export default LayoutComponent;
