//export default function toCaption(str, options = {onAllUppercase: undefined}) {

export as namespace toCaption;

export = toCaption;

declare function toCaption(text?: string | null | undefined, options?: { onAllUppercase?: undefined | 'keep' | 'titlecase' }): string;
