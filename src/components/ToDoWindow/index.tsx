import React from 'react';

import Button from 'components/Button';
import Window from 'components/Window';
import WindowContent from 'components/Window/WindowContent';
import WindowHeader from 'components/Window/WindowHeader';

const ToDoWindow: React.FC = () => (
  <Window>
    <WindowHeader>
      To Do
      <Button>
        +
      </Button>
    </WindowHeader>
    <WindowContent>
      1. Clean up cat&apos;s toilet.<br />
      2. Finish F102 class report.
    </WindowContent>
  </Window>
);

export default ToDoWindow;
