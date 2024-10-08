import { Tooltip } from '@mui/material';
import { IconInfo2 } from 'component/res/images';
import { InfoTooltipProps } from './type';
import * as style from './style';

const InfoTooltip = ({
  helperText,
  customCss,
  iconSize = 14,
  placement = 'top',
  arrow = true,
}: InfoTooltipProps) => {
  return (
    <>
      {helperText && (
        <Tooltip title={helperText} placement={placement} arrow={arrow}>
          <div>
            <IconInfo2
              css={[(theme) => style.helperText(theme, { iconSize }), customCss]}
              className="info-icon"
              color="#F06666"
            />
          </div>
        </Tooltip>
      )}
    </>
  );
};

export default InfoTooltip;
