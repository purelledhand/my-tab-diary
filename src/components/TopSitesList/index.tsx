import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from 'components/Button';
import Window from 'components/Window';
import WindowContent from 'components/Window/WindowContent';
import WindowHeader from 'components/Window/WindowHeader';
import { Site } from 'utils/types';

const useStyle = makeStyles({
  Container: {
    width: 240,
    padding: 16,
    backgroundColor: 'transparent',
    color: '#ffffff',
    borderRadius: 8,
  },
  ToggleButton: {
    backgroundColor: '#c7c7c7e0',
    width: 20,
    color: '#ffffff',
    fontSize: 14,
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    '&:focus': { outline: 0 },
  },
  Content: {
    lineHeight: 1.5,
    '& ul, ol': { padding: 0 },
  },
});

const TopSitesList: React.FC = () => {
  const classes = useStyle();
  const [show, setShow] = useState<boolean>(true);
  const [topSites, setTopSites] = useState<Site[]>([]);

  useEffect(() => {
    chrome?.topSites?.get(setTopSites);
  }, []);

  const toggleShow = () => setShow((prev) => !prev);

  return (
    <Window>
      <WindowHeader>
        My top sites.
        <Button onClick={toggleShow}>
          {show ? '-' : '+'}
        </Button>
      </WindowHeader>
      <WindowContent className={classes.Content}>
        <ul>
          {show && topSites.map(({ url, title }, index) => (
            <ol>
              {index + 1}.
              <a href={url}>
                {title}
              </a>
            </ol>
          ))}
        </ul>
      </WindowContent>
    </Window>
  );
};

export default TopSitesList;
