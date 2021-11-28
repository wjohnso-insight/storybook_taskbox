import React from 'react';

import Task from './Task';

/**
 * This is the default object for each story. It should always contain:
 * - the actual component 
 * - a title that represents that component in the Storybook sidebar
 */
export default {
	component: Task,
	title: 'Task',
}

const Template = args => <Task {...args} />;

// Each exported function represents one of the "test" states for the component
export const Default = Template.bind({});
Default.args = {
	task: {
		id: '1',
		title: 'Test Task',
		state: 'TASK_INBOX',
		updatedAt: new Date(2021, 0, 1, 9, 0),
	},
};

// `Template.bind` creates a copy of a function. This way each exported story can set its own properties while using the same implementation
export const Pinned = Template.bind({});
Pinned.args = {
	task: {
		...Default.args.task,
		state: 'TASK_PINNED',
	},
};

export const Archived = Template.bind({});
Archived.args = {
	task: {
		...Default.args.task,
		state: 'TASK_ARCHIVED',
	},
};