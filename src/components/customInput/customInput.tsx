import { FC } from 'react';
import clsx from 'clsx';
import classes from './customInput.module.less';
import { InputProps } from './Types';

const CustomInput: FC<InputProps> = ({
  classes: customClasses = {},
  fullWidth = false,
  ...props
}) => {
  const { root, input } = customClasses;
  return (
    <div className={clsx(classes.container, root)}>
      <input
        className={clsx(
          classes.input,
          { [classes.fullWidth]: fullWidth },
          input
        )}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
