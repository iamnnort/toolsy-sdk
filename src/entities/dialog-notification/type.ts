import { Entity } from '../__entity/type';
import { Client } from '../client/type';
import { Content } from '../content/type';
import { Dialog } from '../dialog/type';
import { QuestionAnswer } from '../question-answer/type';
import { Invoice } from '../invoice/type';

export type DialogNotification = Entity & {
  event: DialogNotificationEvents | null;
  status: DialogNotificationStatuses;
  sendError: DialogNotificationSendErrors | null;
  providerId: string | null;
  editedAt: string | null;
  content: Content;
  dialog: Dialog;
  client: Client;
  replyToDialogNotification: DialogNotification;
  questionAnswer: QuestionAnswer;
  invoice: Invoice;
};

export enum DialogNotificationEvents {
  DIALOG_ARCHIVED = 'dialog_archived',
  DIALOG_DISABLED = 'dialog_disabled',
  DIALOG_ENABLED = 'dialog_enabled',
  RECEIPT_ACCEPTED = 'receipt_accepted',
  RECEIPT_REJECTED = 'receipt_rejected',
  RECEIPT_SUBMITTED = 'receipt_submitted',
  TASK_ACCEPTED = 'task_accepted',
  TASK_REJECTED = 'task_rejected',
  TASK_SUBMITTED = 'task_submitted',
}

export enum DialogNotificationStatuses {
  PENDING = 'pending',
  ENQUEUED = 'enqueued',
  PROCESSING = 'processing',
  FAILED = 'failed',
  COMPLETED = 'completed',
  EDITED = 'edited',
  REMOVED = 'removed',
  CANCELED = 'canceled',
  ABANDONED = 'abandoned',
}

export enum DialogNotificationSendErrors {
  UNKNOWN = 'unknown',
  USER_BLOCKED = 'user_blocked',
  USER_REMOVED = 'user_removed',
  USER_NOT_FOUND = 'user_not_found',
  USER_VOICE_MESSAGE_RESTRICTED = 'user_voice_message_restricted',
}
