import {
  EMOJI_PROPERTY_NAME,
  EMOJI_PROPERTY_UNIFIED,
  EMOJI_PROPERTY_SKIN_VARIATIONS,
  EMOJI_PROPERTY_GROUP,
} from '../constants';

export interface EmojiProps {
  [EMOJI_PROPERTY_NAME]?: string[];
  [EMOJI_PROPERTY_UNIFIED]?: string;
  [EMOJI_PROPERTY_SKIN_VARIATIONS]?: string[];
  [EMOJI_PROPERTY_GROUP]?: string;
}

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
