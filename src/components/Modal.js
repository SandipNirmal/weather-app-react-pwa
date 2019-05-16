import React from 'react';

export const Modal = React.memo(({ children, handleClose }) => {
  return (
    <div className={'modalOverlay'}>
      <div className={'modal'}>
        <div className={'modalContent'}>{children}</div>
      </div>

      <button type="button" className={'closeButton'} onClick={handleClose} />
    </div>
  );
});
