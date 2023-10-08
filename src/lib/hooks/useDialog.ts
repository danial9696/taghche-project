import { useEffect, useState } from 'react';

/**
 * * Its for controlling a Dialog programmatically from another component
 * The useDialog function is a custom hook in TypeScript that manages the state of a dialog component,
 * including opening, closing, and submitting the dialog.
 * @param {boolean} open - A boolean value indicating whether the dialog should be open or closed
 * initially.
 * @param handleDialogClose - The `handleDialogClose` parameter is a function that is called when the
 * dialog is closed. It can be used to perform any necessary cleanup or additional actions when the
 * dialog is closed.
 * @returns The `useDialog` function returns an object with three properties: `dialogOpen`,
 * `handleClose`, and `handleSubmit`.
 */
const useDialog = (open: boolean, handleDialogClose: () => void) => {
  const [dialogOpen, setDialogOpen] = useState(open);

  const handleClose = () => {
    handleDialogClose();
    setDialogOpen(false);
  };

  const handleSubmit = () => {
    handleClose();
  };

  useEffect(() => {
    setDialogOpen(open);
  }, [open]);

  return {
    dialogOpen,
    handleClose,
    handleSubmit,
  };
};

export default useDialog;
