import type { MessageAttachment } from 'discord.js';
import type { ButtonStyle } from './ButtonsOptions';
import type { EmojiOptions } from './EmojiOptions';

/**
 * The options to customize the pagination.
 */
export interface Options extends EmojiOptions {
	/**
	 * The label for the first page button.
	 * @default ""
	 */
	firstLabel: string;
	/**
	 * The label for the previous page button.
	 * @default ""
	 */
	prevLabel: string;
	/**
	 * The label for the next page button.
	 * @default ""
	 */
	nextLabel: string;
	/**
	 * The label for the last page button.
	 * @default ""
	 */
	lastLabel: string;
	/**
	 * The number of entries to show per page.
	 * @default 5
	 */
	limit: number;
	/**
	 * The number of seconds before the paginator will close after inactivity.
	 * @default 5 minutes
	 */
	idle: number;
	/**
	 * Whether the reply should be ephemeral.
	 * @default false
	 */
	ephemeral: boolean;
	/**
	 * The description to show before the paginated descriptions.
	 * @default ""
	 */
	prevDescription: string;
	/**
	 * The description to show after the paginated descriptions.
	 * @default ""
	 */
	postDescription: string;
	/**
	 * The attachments to show with the paginated messages.
	 * @default []
	 */
	attachments: MessageAttachment[];

	/**
	 * Contents if changing contents per page.
	 * @default []
	 */
	contents: string[];
	/**
	 * The style of the paginator buttons.
	 * @default "SECONDARY"
	 */
	buttonStyle: ButtonStyle;
	/**
	 * loop through the pages.
	 * @default false
	 */
	loop: boolean;
}
