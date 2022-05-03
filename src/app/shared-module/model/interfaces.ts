export interface TgUser {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  can_join_groups?: boolean;
  can_read_all_group_messages?: boolean;
  supports_inline_queries?: boolean;
}

export interface ChatPhoto {
  small_file_id: string;
  small_file_unique_id: string;
  big_file_id: string;
  big_file_unique_id: string;
}

export interface ChatPermissions {
  can_send_messages?: boolean;
  can_send_media_messages?: boolean;
  can_send_polls?: boolean;
  can_send_other_messages?: boolean;
  can_add_web_page_previews?: boolean;
  can_change_info?: boolean;
  can_invite_users?: boolean;
  can_pin_messages?: boolean;
}

export interface Location {
  longitude: number;
  latitude: number;
  horizontal_accuracy: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
}

export interface ChatLocation {
  location:	Location;
  address: string;
}

export interface Chat {
  id: number;
  type: string;
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  photo?:	ChatPhoto;
  bio?: string;
  has_private_forwards?: boolean;
  description?: string;
  invite_link?: string;
  pinned_message?: Message;
  permissions?:	ChatPermissions;
  slow_mode_delay?: number;
  message_auto_delete_time?: number;
  has_protected_content?: boolean;
  sticker_set_name?: string;
  can_set_sticker_set?: boolean;
  linked_chat_id?: number;
  location?:	ChatLocation;
}

export interface MessageEntity {
  type: string;
  offset: number;
  length: number;
  url?: string;
  user:	TgUser;
  language?: string;
}

export interface PhotoSize {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  file_size?: number;
}

export interface Animation {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  duration?: number;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
}

export interface Audio {
  file_id: string;
  file_unique_id: string;
  duration: number;
  performer?: string;
  title?: string;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
  thumb?:	PhotoSize;
}

export interface Document {
  file_id: string;
  file_unique_id: string;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
}

export interface MaskPosition {
  point: string;
  x_shift: number;
  y_shift: number;
  scale: number;
}

export interface Sticker {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  is_animated: boolean;
  is_video: boolean;
  thumb?:	PhotoSize;
  emoji?: string;
  set_name?: string;
  mask_position?:	MaskPosition;
  file_size?: number;
}

export interface Video {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  duration: number;
  thumb?:	PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
}

export interface VideoNote {
  file_id: string;
  file_unique_id: string;
  length: number;
  duration: number;
  thumb?:	PhotoSize;
  file_size?: number;
}

export interface Voice {
  file_id: string;
  file_unique_id: string;
  duration: number;
  mime_type?: string;
  file_size?: number;
}

export interface Message {
  message_id: number;
  from: TgUser;
  sender_chat?:	Chat;
  date: number;
  chat:	Chat;
  forward_from?:	TgUser;
  forward_from_chat?:	Chat;
  forward_from_message_id?: number;
  forward_signature?: string;
  forward_sender_name?: string;
  forward_date?: number;
  is_automatic_forward?: boolean;
  reply_to_message?:	Message;
  via_bot?:	TgUser;
  edit_date?: number;
  has_protected_content?: boolean;
  media_group_id?: string;
  author_signature?: string;
  text?: string;
  entities:	Array<MessageEntity>;
  animation?:	Animation;
  audio?:	Audio;
  document?:	Document;
  photo?:	Array<PhotoSize>;
  sticker?:	Sticker;
  video?:	Video;
  video_note?:	VideoNote;
  voice?:	Voice;
  caption?: string;
  caption_entities?:	Array<MessageEntity>;
  // contact?:	Contact;
  // dice?:	Dice;
  // game?: Game;
  // poll?:	Poll;
  // venue?:	Venue;
  location?:	Location;
  new_chat_members?:	Array<TgUser>;
  left_chat_member?:	TgUser;
  new_chat_title?: string;
  new_chat_photo?:	Array<PhotoSize>;
  delete_chat_photo?: boolean;
  group_chat_created?: boolean;
  supergroup_chat_created?: boolean;
  channel_chat_created?: boolean;
  // message_auto_delete_timer_changed?:	MessageAutoDeleteTimerChanged;
  migrate_to_chat_id?: number;
  migrate_from_chat_id?: number;
  pinned_message?:	Message;
  // invoice?:	Invoice;
  // successful_payment?:	SuccessfulPayment:
  connected_website?: string;
  // passport_data?:	PassportData;
  // proximity_alert_triggered?:	ProximityAlertTriggered;
  // video_chat_scheduled?:	VideoChatScheduled;
  // video_chat_started?:	VideoChatStarted;
  // video_chat_ended?:	VideoChatEnded;
  // video_chat_participants_invited?:	VideoChatParticipantsInvited;
  // web_app_data?:	WebAppData;
  // reply_markup?:	InlineKeyboardMarkup;
}
