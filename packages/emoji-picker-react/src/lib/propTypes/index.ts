import PropTypes from 'prop-types';
import {
  EMOJI_PROPERTY_NAME,
  EMOJI_PROPERTY_UNIFIED,
  EMOJI_PROPERTY_SKIN_VARIATIONS,
  EMOJI_PROPERTY_GROUP,
} from '../../../lib/constants';

export const emoji = PropTypes.shape({
  [EMOJI_PROPERTY_NAME]: PropTypes.arrayOf(PropTypes.string),
  [EMOJI_PROPERTY_UNIFIED]: PropTypes.string,
  [EMOJI_PROPERTY_SKIN_VARIATIONS]: PropTypes.arrayOf(PropTypes.string),
  [EMOJI_PROPERTY_GROUP]: PropTypes.string,
});

export interface GroupNamesProps {
  smileys_people?: string;
  animals_nature?: string;
  food_drink?: string;
  travel_places?: string;
  activities?: string;
  objects?: string;
  symbols?: string;
  flags?: string;
  recently_used?: string;
}

export interface ConfigProps {
  emojiUrl?: string;
  preload?: boolean;
  skinTone?: string;
  groupNames?: GroupNamesProps;
  native?: boolean;
  groupVisibility?: Record<string, boolean>;
  disableAutoFocus?: boolean;
  disableSearchBar?: boolean;
  disableSkinTonePicker?: boolean;
}
