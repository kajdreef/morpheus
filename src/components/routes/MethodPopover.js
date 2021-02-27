import React from 'react';
import {Button} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import Popover from '@material-ui/core/Popover';
import ClearIcon from '@material-ui/icons/Clear';

const MethodPopover = ({anchor, setAnchor, current_method, current_project, onMethodClick, onHistoryClick}) => {
  return(
    <Popover
        id={Boolean(anchor) ? 'simple-popover' : undefined}
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={setAnchor}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
        }}
        transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
        }}
    >
        <h3>
          {current_method.split(' ').slice(2)}
           <Button sz="xs" onClick={setAnchor}>
              <ClearIcon fontSize="small" />
          </Button> 
        </h3>
        <p>Project: {current_project} </p>
        <p>Package: {current_method.split(' ')[0]}{   }</p>
        <Button appearance="default" onClick={onMethodClick}>Filter by Method (default)</Button>
        <Button appearance="primary" onClick={onHistoryClick}>View Method History</Button>
        
    </Popover>
  )
}

export default MethodPopover;