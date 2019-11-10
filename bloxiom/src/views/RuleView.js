import React from 'react';
import Rule from '../components/Rule';

const RuleView = () => (
  <>
    <div style={{ width: '100%' }}>
      <h1>This is the Rules View Page</h1>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', minHeight: 500 }}>
      <div style={{ width: 120, backgroundColor: 'rgb(20, 175, 256, 0.5)' }}>SideNav?</div>
      <div style={{ width: 'calc(100% - 120px)', backgroundColor: 'rgb(20, 175, 256, 0.2)' }}><Rule /></div>
    </div>
  </>
);

export default RuleView;
