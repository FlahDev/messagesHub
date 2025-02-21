export type ChangeEvent<T extends HTMLElement> = Omit<Event, 'target'> & {
	target: T;
};

export type DragEvent<T extends HTMLElement> = Omit<Event, 'target'> & {
	target: T;
};
