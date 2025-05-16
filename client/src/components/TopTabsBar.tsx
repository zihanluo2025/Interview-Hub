// TopTabsBar.tsx
import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const tabConfig = [
  { label: '全部题目', value: '/questions' },
  { label: '前端', value: '/questions/frontend' },
  { label: '后端', value: '/questions/backend' },
  { label: '算法', value: '/questions/algorithm' },
  { label: '行为问题', value: '/questions/behavior' },
];

const TopTabsBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = tabConfig.find(tab => location.pathname.startsWith(tab.value))?.value || '/questions';

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  return (
    <Tabs value={currentTab} onChange={handleChange} textColor="primary" indicatorColor="primary" >
      {tabConfig.map(tab => (
        <Tab key={tab.value} label={tab.label} value={tab.value} />
      ))}
    </Tabs>
  );
};

export default TopTabsBar;
