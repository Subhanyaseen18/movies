import {borders, colors, fontsSize, family} from '../constants/index';

const DEFAULT_LIGHT_COLOR_THEME = {
    primaryColor: colors.white,
    primaryText: colors.black,
    secondaryText: colors.white,
    buttonColor:colors.blue,
    error:colors.red,
    backgroundColor:colors.darkBlue,
    defaultBackground:colors.lightBlack,
  };

const FONT_SET = {
  size: {
    xSmall: fontsSize.extraSmall,
    small: fontsSize.small,
    medium: fontsSize.medium,
    large: fontsSize.large,
    xLarge: fontsSize.extraLarge,
  },
  family: {
    regular: family.regular,
    medium: family.medium,
    bold: family.bold,
    xBold: family.xBold,
  },
};

const BORDER_RADIUS = {
  radius1: borders.radius1,
  radius2: borders.radius2,
  radius3: borders.radius3,
  radius4: borders.radius4,
  radius5: borders.radius5,
  radius6: borders.radius6,
};

export const DEFAULT_LIGHT_THEME_ID = 'default-light';

export const DEFAULT_LIGHT_THEME = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  size: FONT_SET.size,
  borders: BORDER_RADIUS,
  family: FONT_SET.family,
};
